import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

const ajv = new Ajv();

const BASE_URL = 'https://restful-booker.herokuapp.com';

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
            required: [
                'firstname',
                'lastname',
                'totalprice',
                'depositpaid',
                'bookingdates'
            ]
        }
    },
    required: ['bookingid', 'booking']
};

test.describe('Booking API Automation', () => {

    test('Generar token de autenticación', async ({ request }) => {

        const response = await request.post(
            `${BASE_URL}/auth`,
            {
                data: {
                    username: 'admin',
                    password: 'password123'
                }
            }
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        console.log('TOKEN:', body);

        expect(body).toHaveProperty('token');
        expect(body.token).toBeTruthy();
    });

    test('Crear nueva reserva y validar schema', async ({ request }) => {

        const response = await request.post(
            `${BASE_URL}/booking`,
            {
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
            }
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        console.log(
            'BOOKING CREATED:',
            JSON.stringify(body, null, 2)
        );

        expect(
            body.booking.firstname
        ).toBe('Jose');

        const schemaValidation =
            ajv.validate(
                bookingSchema,
                body
            );

        expect(schemaValidation).toBe(true);
    });

    test('Actualizar una reserva existente', async ({ request }) => {

     
        const authResponse =
            await request.post(
                `${BASE_URL}/auth`,
                {
                    data: {
                        username: 'admin',
                        password: 'password123'
                    }
                }
            );

        const authBody =
            await authResponse.json();

        const token =
            authBody.token;

        
        const bookingResponse =
            await request.post(
                `${BASE_URL}/booking`,
                {
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
                }
            );

        const bookingBody =
            await bookingResponse.json();

        const bookingId =
            bookingBody.bookingid;

        
        const updateResponse =
            await request.put(
                `${BASE_URL}/booking/${bookingId}`,
                {
                    headers: {
                        Cookie: `token=${token}`,
                        Accept: 'application/json',
                        'Content-Type':
                            'application/json'
                    },
                    data: {
                        firstname:
                            'Jose Sebastian',
                        lastname:
                            'Monsalve',
                        totalprice:
                            180000,
                        depositpaid:
                            true,
                        bookingdates: {
                            checkin:
                                '2026-12-01',
                            checkout:
                                '2026-12-02'
                        },
                        additionalneeds:
                            'Sabanas y toallas extra'
                    }
                }
            );

        expect(
            updateResponse.ok()
        ).toBeTruthy();

        const updatedBody =
            await updateResponse.json();

        console.log(
            'UPDATED BOOKING:',
            JSON.stringify(
                updatedBody,
                null,
                2
            )
        );

        expect(updatedBody)
            .toMatchObject({
                firstname:
                    'Jose Sebastian',
                additionalneeds:
                    'Sabanas y toallas extra'
            });
    });
});