# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Información de cada archivo de un proyecto de Angular:

tslint.json --> archivo de configuración, ej. "arrow-return-shorthand" (no marca error en las funciones de flecha)  // en Angular 13 ya no aparece
tsconfig.spec.json --> añade funcionalidad de pruebas al archivo tslint.json
tsconfig.json --> archivo de configuración, decimos como queremos que compile la app a JavaScript o como quieremos que funcione TypeScrpit en el proyecto
tsconfig.app.json --> extensiones de configuración 
Readme.md --> se abre en una ventana nueva y aparece como un archivo de texto (ver/paleta de comandos/buscar "Markdown: actualizar vista previa")
package.json --> habla de dependencias. 'delicado' mejor añadir las dependencias por comandos en lugar de menterlo directamente
package-lock.json --> tampoco se modifica manualmente. Nos dice cómo se construyó todo.
karma.conf.js --> configuraciones para pruebas basados en karma
angular.json --> IMPORTANTE configuraciones para nuestra app
.editorconfig --> reals para los archivos de ts (puede que venga o puede que no)
.browserslistrc --> por si necesitas incrementar la compatibilidad con el Browsers
index.html --> la página por defecto en html (<app-root> la app por defecto de Angular)
main.ts --> nos dice en que ambiente está corriendo Angular
polyfills.ts --> ayuda a tener compatibilidad con otros navegador web
style.css --> archivo de estilo global
test.ts --> configuarción de nuestro ambiente de pruebas


CARPETAS

e2e --> no viene en esta pero es para la configuración de pruebas de testing

app 
src/app/ todos los component --> todos hacen relacion al mismo objetivo que es un componente 
src/app/app.component.html --> para "pintar" la app
src/app/app.component.css --> estilos que se aplican al componente
src/app/app.component.spec.ts --> relacionados a pruebas
src/app/app.component.ts --> la lógica del componente
src/app/app.module.ts --> están los módulos que compone la app (como un agrupador)

assets --> recursos 

environments --> lugar para nuestras variables de entorno  (environment: aplicación informática que proporciona servicios integrales para facilitarle al desarrollado)
environments/environment.prod.ts --> de produción
environments/environment.ts --> de desarrollo

# Comandos de terminal
ng serve --open --> levantar app en el browser (levanta un microfront, se puede generar un comando para que levante varios microfront a la vez)
ng g c "meter el path" --> crear un componente
ng g m "meter el path" --> crear un módulo