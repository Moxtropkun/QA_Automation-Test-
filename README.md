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

Capa API: Validación de contratos, códigos de respuesta y tiempos de latencia.

Gestión de Dependencias: Uso de Node.js con TypeScript para garantizar tipado estricto en la automatización.

*stack tecnologico*
   1. Mobile Test 
      -Appium
      -TypeScript
      -Page Objetc Model

   2. API Test 
      -Appium
      -TypeScript
      
   3. Reportes  
      -Allure
   
   4. IA Asistentes  
      -Google Gemini
      -Open IA Chat GpT
   


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

2. **Ejecución Móvil:**
   ```bash
   npm run test:mobile
Ejecución API:

Bash
npm run test:api