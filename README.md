# QA_Automation-Test
Prueba técnica de automatización de pruebas QA


Proyecto: Automatización de Pruebas 
Este repositorio contiene el framework de automatización para la validación de calidad de la plataforma "DemoApp". La solución aborda tanto la capa de servicios (API) como la capa móvil (Android), aplicando estándares de ingeniería de software para asegurar mantenibilidad y escalabilidad.

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
└── package.json         # Gestión de dependencias y scripts

*Estrategia de Pruebas*
Capa Móvil: Implementación de Page Object Model (POM) para centralizar los selectores y mejorar la reutilización del código. Priorización de accessibilityId y resource-id para garantizar la estabilidad de los scripts ante cambios en la interfaz.

Capa API: Validación de contratos, códigos de respuesta y tiempos de latencia.

Gestión de Dependencias: Uso de Node.js con TypeScript para garantizar tipado estricto en la automatización.

*Configuración y Ejecución*
Prerrequisitos stack tecnologico
Node.js (v18 o superior)

Java Development Kit (JDK) 11+

Android SDK (con emulador configurado)

Appium Server

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