import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'gps-consumer',
    brokers: ['localhost:9092']
});

const consumer = kafka.consumer({
    groupId: 'gps-group'
});

async function consume() {

    await consumer.connect();

    await consumer.subscribe({
        topic: 'gps-raw-events',
        fromBeginning: true
    });

    console.log('Esperando mensajes...');

    await consumer.run({
        eachMessage: async ({ message }) => {

            const payload = JSON.parse(
                message.value?.toString() || '{}'
            );

            console.log('Mensaje recibido:');
            console.log(payload);

            const isValid =
                payload.vehicleId &&
                payload.lat &&
                payload.lng &&
                payload.speed;

            console.log(
                isValid
                    ? 'Estructura válida'
                    : 'Estructura inválida'
            );
        }
    });
}

consume().catch(console.error);