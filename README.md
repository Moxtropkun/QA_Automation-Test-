# QA_Automation-Test
Prueba técnica de automatización de pruebas QA


Proyecto: Automatización de Pruebas 
Este repositorio contiene el framework de automatización para la validación de calidad de la aplicación: SauceLabs My Demo App. La solución aborda tanto la capa de servicios (API) como la capa móvil (Android), aplicando estándares de ingeniería de software para asegurar mantenibilidad y escalabilidad.

📂 Arquitectura del Proyecto
La estructura está diseñada para separar responsabilidades y facilitar la ejecución independiente de las suites de prueba:

Objetivos

Validar los siguientes componentes:

Mobile Testing:
*Login exitoso.
*Login inválido.
*Flujo completo de compra.
*Compra de múltiples productos.

API Testing:
*Generación de token.
*Creación de reserva.
*Actualización de reserva.

```Plaintext
QA_Automation-Test
│
├── Api_Test
│   ├── tests
│   │   └── api.spec.ts                
│   └── playwright.config.ts
│
├── test_Apk                           
│   ├── pageobjects
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── ProductsPage.ts
│   │   ├── CartPage.ts
│   │   ├── MenuPage.ts
│   │   ├── CheckoutShippingPage.ts
│   │   ├── CheckoutPaymentPage.ts
│   │   └── CheckoutReviewPage.ts
│   │
│   └── specs
│       ├── login.ts
│       ├── InvalidLogin.ts
│       ├── fullFlow.ts
│       └── checkoutTreeProducts.ts
├── Kafka_Test
│   ├── consumer.ts
│   ├──producer.ts              
│   └── kakfa.spec.ts
├── docker-compose.yml
├── Evidencias
├── DemoApp.apk
├── README.md
└── AI_USAGE.MD


*Estrategia de Pruebas*
Capa Móvil: Implementación de Page Object Model (POM) para centralizar los selectores y mejorar la reutilización del código. Priorización de accessibilityId y resource-id para garantizar la estabilidad de los scripts ante cambios en la interfaz.

Capa API: Validación de contratos, códigos de respuesta y tiempos de latencia.

Gestión de Dependencias: Uso de Node.js con TypeScript para garantizar tipado estricto en la automatización.

*stack tecnologico*
   1. Mobile Test 
      -Appium
      -TypeScript
      -Page Objetc Model

   2. API Test 
      -Playwright
      -TypeScript
      
   3. Reportes  
      -Allure
   
   4. IA Asistentes  
      -Google Gemini
      -Open IA Chat GpT
   
   5. Kafka test  
      -Docker desktop
      

*Configuración y Ejecución*
Prerrequisitos

*Node.js (v18 o superior)
*Java Development Kit (JDK) 11+
*Android SDK (con emulador y variables de entorno HOME configurados)
   -Se emula telefono google pixel 7(normal), con verison de sistema Android 14.

   1. Variables: 
   Nombre:"ANDROID_HOME"  
   Valor:"Usuario xxx\AppData\Local\Android\Sdk"

   Nombre:"JAVA_HOME"  
   Valor:"C:\Program Files\Eclipse Adoptium\"version instalada..."

   NOTA: a la variable Path se agregan los sientes valores Nombre:"Path"  
   Valor:"%ANDROID_HOME%\platform-tools"
   Valor:"%ANDROID_HOME%\emulator"
   Valor:"%ANDROID_HOME%\tools"
   Valor:"%ANDROID_HOME%\cmdline-tools\latest\bin"
   Valor:"%JAVA_HOME%\bin"

*Appium Server
*Appium doctor

*Comandos principales*

1. **Instalación:**

Bash
npm install

Instalamos Driver android:
npx appium driver install uiautomator2

Instalamos allure reporter:
npm install @wdio/allure-reporter --save-dev

Instalamos kafkaJs:
npm install kafkajs

Instalamos wsl:
wsl --install


Verificamos que se este ejecuando el emulador
adb devices
*se deben listar dispositivos activos*


2. **Ejecución Móvil:**
   ```bash
 

## Para ejecutar las pruebas moviles nos ubicamos en la carpeta raiz y ejecutamos la prueba correspondiente con la sigueinte sintaxis

npx wdio [archivo_configuración] --spec [ruta_del_archivo_de_prueba]

por ejemplo para el flujo completo seria:

npx wdio wdio.conf.ts --spec ./test_Apk/specs/fullFlow.ts



3. **Ejecución API:**
   ```bash
 
 ## Para ejecutar la prueba de api nos ubicamos en la carpeta raiz y ejecutamos la prueba con el sigueinte comando 

```bash
Ejemplo: npx playwright test Api_Test/tests/api.spec.ts --config Api_Test/playwright.config.ts



4. **Ejecución prueba Kafka:**
   ```bash
   
## Para ejecutar la prueba de kafka abrimos la primera levantamos los contenemdores del docker con el siguiente comando:
docker compose -up

 ## En la primera terminal y ejecutamos el comando
npx ts-node Kafka_Test/consumer.ts

 ## En la segunda terminal y ejecutamos el comando
npx ts-node Kafka_Test/producer.ts


Se automatizó el proceso con playwright y se lanzara con el siguiente comando
npx playwright test Kafka_Test/kafka.spec.ts

```bash
el primero escuchara y esperará los datos enviados de la segunda terminal

Extras:

Si al momento de ejecutar existe alun problema de instacion de depencias de appium o algun componente los compandos serian los siguientes:

Wdio y appium dependencias completas:
npm install @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/appium-service appium webdriverio ts-node typescript --save-dev



Volvemos a lanzar el comando y Test debera iniciarse
