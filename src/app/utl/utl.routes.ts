import { Routes } from "@angular/router";
export default[
    {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component')
    },
    {
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component')
    },
    {
        path:'elimina/:matricula',
        loadComponent:()=>import('./eliminar/eliminar.component')
    }
]