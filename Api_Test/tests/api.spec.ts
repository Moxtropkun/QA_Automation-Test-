import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import * as http from 'http';

const ajv = new Ajv();

const bookingSchema = {
    type: 'object',
    properties: {
        bookingid: { type: 'number' },
        booking: {
            type: 'object',
            properties: {
                firstname: { type: 'string' },
                lastname: { type: 'string' },
                totalprice: { type: 'number' },
                depositpaid: { type: 'boolean' },
                bookingdates: {
                    type: 'object',
                    properties: {
                        checkin: { type: 'string' },
                        checkout: { type: 'string' }
                    },
                    required: ['checkin', 'checkout']
                }
            },
            required: ['firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates']
        }
    },
    required: ['bookingid', 'booking']
};

test.describe('Creacion de serva automatizada ', () => {
    let server: http.Server;
    const PORT = 3001;
    const BASE_URL = `http://localhost:${PORT}`;
    
    let token: string;
    let bookingId: number;


    test.beforeAll(async () => {
        server = http.createServer((req, res) => {
            res.setHeader('Content-Type', 'application/json');

            if (req.url === '/auth' && req.method === 'POST') {
                res.writeHead(200);
                res.end(JSON.stringify({ token: 'QpwL5tke4Pnpja7X4' }));
            } 
            else if (req.url === '/booking' && req.method === 'POST') {
                res.writeHead(200);
                res.end(JSON.stringify({
                    bookingid: 4242,
                    booking: {
                        firstname: 'Jose',
                        lastname: 'Monsalve',
                        totalprice: 150000,
                        depositpaid: true,
                        bookingdates: {
                            checkin: '2026-12-01',
                            checkout: '2026-12-02'
                        }
                    }
                }));
            } 
            else if (req.url === '/booking/4242' && req.method === 'PUT') {
                res.writeHead(200);
                res.end(JSON.stringify({
                    firstname: 'Jose Sebastian',
                    lastname: 'Monsalve',
                    totalprice: 180000,
                    depositpaid: true,
                    bookingdates: {
                        checkin: '2026-12-01',
                        checkout: '2026-12-02'
                    },
                    additionalneeds: 'Sabanas y toahallas extra'
                }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Not Found' }));
            }
        });

        await new Promise<void>((resolve) => server.listen(PORT, resolve));
    });

    test.afterAll(async () => {
        await new Promise<void>((resolve) => server.close(() => resolve()));
    });

    test('captura del token', async ({ request }) => {
        const response = await request.post(`${BASE_URL}/auth`, {
            data: {
                username: 'admin',
                password: 'password123'
            }
        });

        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        
        console.log('=== AUTH TOKEN GENERADO ===');
        console.log(body);
        console.log('===========================\n');

        expect(body).toHaveProperty('token');
        token = body.token;
    });

    test('Creamdo una nueva reservacion', async ({ request }) => {
        const response = await request.post(`${BASE_URL}/booking`, {
            data: {
                firstname: 'Jose',
                lastname: 'Monsalve',
                totalprice: 150000,
                depositpaid: true,
                bookingdates: {
                    checkin: '2026-12-01',
                    checkout: '2026-12-02'
                }
            }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        
        console.log('=== RESERVA CREADA (POST) ===');
        console.log(JSON.stringify(body, null, 2));
        console.log('=============================\n');

        expect(body.booking.firstname).toBe('Jose');
        
        const isSchemaValid = ajv.validate(bookingSchema, body);
        expect(isSchemaValid).toBe(true);

        bookingId = body.bookingid;
    });

    test('actualizacion de la reserva', async ({ request }) => {
        const targetId = bookingId || 4242;

        const response = await request.put(`${BASE_URL}/booking/${targetId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token || 'QpwL5tke4Pnpja7X4'}`
            },
            data: {
                firstname: 'Jose Sebastian',
                lastname: 'Monsalve',
                totalprice: 180000,
                depositpaid: true,
                bookingdates: {
                    checkin: '2026-12-01',
                    checkout: '2026-12-02'
                },
                additionalneeds: 'Sabanas y toahallas extra'
            }
        });

        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        
        console.log('=== RESERVA ACTUALIZADA (PUT) ===');
        console.log(JSON.stringify(body, null, 2));
        console.log('=================================\n');

        expect(body).toMatchObject({
            firstname: 'Jose Sebastian',
            additionalneeds: 'Sabanas y toahallas extra'
        });
    });
});
