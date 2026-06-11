import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'gps-producer',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

async function sendMessage() {

    await producer.connect();

    const telemetry = {
        vehicleId: 'VEH-99',
        lat: 4.60,
        lng: -74.08,
        speed: 65
    };

    await producer.send({
        topic: 'gps-raw-events',
        messages: [
            {
                value: JSON.stringify(telemetry)
            }
        ]
    });

    console.log('Mensaje enviado');
    console.log(telemetry);

    await producer.disconnect();
}

sendMessage().catch(console.error);