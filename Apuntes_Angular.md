# Angular

## Principios
Las aplicaciones se cmponente de: 
1. Componentes
2. Rutas
3. Directivas
4. Servicios
Estas pueden ser agrupadas en un módulo

#### Archivos 
tslint -> deprecated

tsconfig -> Típica configuración de TS

tsconfig.spec -> Configuración Pruebas (TS)

tsconfig.app -> Configuracions TS para App

package.json -> Se recomienda no usar directamente, solo con los comandos de npm, maneja dependencias

karma.conf -> Pruebas uniatrias y de intergación con karma

Angular.json -> Configuracines y recursos estáticos

editor.config -> Reglas de edición para TS y MD

browserlistscr -> Configuraciones para el soporte de navegadores

src -> Todos los archivos de código necesarios

Dentro del src podemos encontrar el environment que nos ayudará

main.ts -> Por lo general no se topa, tiene aspectos del comportamiento de Angulat

Polyfills -> Casi no se topa es solo paa compilación de ciertos navegadores

tests.ts -> Configuración pruebas ts global

### Apuntes

• Los módulos que creamos
• En la definición de NgModule debemos considerar que los imports son  únicamente módulos que 
se requiere para el funcionamiente, siempre serán solo módulos
• El common module, nos trae las directivas como *ngFor, ngTemplate y *ngIf 

## Comandos Angular CLI
> Creación proyecto
>> ng new "NombreProyecto"
> 
> Empezar aplicación
>> ng serve 
> 
> Crear componente
> >ng g c "nombreComponente"

