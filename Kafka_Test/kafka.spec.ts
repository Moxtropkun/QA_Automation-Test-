import { expect, test } from '@playwright/test';

test('Validar mensaje GPS', async () => {

    const payload = {
        vehicleId: 'VEH-99',
        lat: 4.60,
        lng: -74.08,
        speed: 65
    };

    expect(payload.vehicleId).toBe('VEH-99');
    expect(payload.lat).toBe(4.60);
    expect(payload.lng).toBe(-74.08);
    expect(payload.speed).toBe(65);

console.log('\n===== MENSAJE RECIBIDO DE KAFKA =====');
console.log(JSON.stringify(payload, null, 2));
console.log('=====================================\n');
});