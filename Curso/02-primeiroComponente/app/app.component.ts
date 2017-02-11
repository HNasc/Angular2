import { Component } from '@angular/core';
 
@Component({ //Adicionada tag criada através do selector
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
    `
})
export class AppComponent { }
