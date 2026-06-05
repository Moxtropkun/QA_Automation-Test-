# QA_Automation-Test
Prueba técnica de automatización de pruebas QA


Proyecto: Automatización de Pruebas 
Este repositorio contiene el framework de automatización para la validación de calidad de la aplicacion: SauceLabs My Demo App. La solución aborda tanto la capa de servicios (API) como la capa móvil (Android), aplicando estándares de ingeniería de software para asegurar mantenibilidad y escalabilidad.

📂 Arquitectura del Proyecto
La estructura está diseñada para separar responsabilidades y facilitar la ejecución independiente de las suites de prueba:


```Plaintext
/QA_Movile_test
├── api-tests/           # Pruebas de integración de servicios (Playwright)
├── test_Apk/            # Suite de pruebas móviles (WebdriverIO + Appium)
│   ├── pageobjects/     # Patrón Page Object Model (POM)
│   └── specs/           # Casos de prueba automatizados
├── .gitignore           # Exclusión de archivos binarios y temporales
├── README.md            # Guía del proyecto
├── AI_USAGE.md          # Bitácora de co-pilotaje e IA
├── package.json         # Gestión de dependencias y scripts
└── Evicencias           # Evidencias de ejecucion de los test y reportes


*Estrategia de Pruebas*
Capa Móvil: Implementación de Page Object Model (POM) para centralizar los selectores y mejorar la reutilización del código. Priorización de accessibilityId y resource-id para garantizar la estabilidad de los scripts ante cambios en la interfaz.

🛠️ Stack Tecnológico

Mobile Test: Appium, TypeScript, Page Object Model.

API Test: Playwright (Web API Testing), TypeScript.

Reportes: Allure Reports.

IA Asistentes: Google Gemini, OpenAI ChatGPT.

⚙️ Configuración y Ejecución

Prerrequisitos

Node.js (v18 o superior)

Java Development Kit (JDK 25)

Android SDK (Emulador: Google Pixel 7, Android 14)

Variables de Entorno

Para el correcto funcionamiento, configura las siguientes variables en tu Sistema Operativo:

```Variable

Valor sugerido / Ejemplo

ANDROID_HOME

C:\Users\<USER>\AppData\Local\Android\Sdk

JAVA_HOME

C:\Program Files\Eclipse Adoptium\jdk-25.0.3.9-hotspot

Configuración del Path:
Debes agregar los siguientes binarios a tu variable de sistema Path:

%ANDROID_HOME%\platform-tools

%ANDROID_HOME%\emulator

%ANDROID_HOME%\tools

%ANDROID_HOME%\cmdline-tools\latest\bin

%JAVA_HOME%\bin

Verificación de Entorno

Antes de ejecutar, asegúrate de que tus herramientas estén correctamente configuradas ejecutando:

# Verificar Appium
appium doctor

# Verificar Java
java -version


*Comandos principales*
1. **Instalación:**

Bash
npm install

2. **Ejecución Móvil:**
   ```bash
 
```bash
1. primero instalamos las dependencias de WDIO con el sigueinte comando 

npm install @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/appium-service appium webdriverio ts-node typescript --save-dev

$ npx appium driver install uiautomator2
$ npm install @wdio/allure-reporter --save-dev



# Sintaxis: npx wdio [archivo_configuración] --spec [ruta_del_archivo_de_prueba]

Ejemplo: npx wdio wdio.conf.ts ./test_Apk/specs/fullFlow.ts

una vez ejecutado este comando WDIO, si es la primera vez  abrira su panel de configuracion se debe dejar la siguiente configuracion

√ A project named "api_test" was detected at
√ Do you want to use page objects
(https://martinfowler.com/bliki/PageObject.html)? Yes
√ Where are your page objects located? y
√ Which reporter do you want to use? spec, allure
√ Do you want to add a plugin to your test setup?
√ Would you like to include Visual Testing to your setup? For more information
see https://webdriver.io/docs/visual-testing No
√ Do you want to add a service to your test setup? appium
√ Do you want me to run `npm install` Yes



Volvemos a lanzar el comando y Test debera iniciarse

Ejemplo: npx wdio wdio.conf.ts ./test_Apk/specs/fullFlow.ts


3. **Ejecución API:**
   ```bash
 
```bash
Ejemplo: npx playwright test Api_Test/tests/api.spec.ts --config Api_Test/playwright.config.ts


⚠️ Troubleshooting

Si al ejecutar los tests móviles recibes errores de "Device Not Found" o "Java not found":

Verifica que el emulador esté activo y en modo adb devices.

Asegúrate de que las variables de entorno (JAVA_HOME, ANDROID_HOME) fueron aplicadas reiniciando la terminal de VS Code.
