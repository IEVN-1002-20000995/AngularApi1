import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor() { }
  alumnos:string[]=['a','b','c']

  add(alumno:string){ /* metodo que cuando sea invocado integra arreglos??? */
    this.alumnos.push(alumno)
  }
  
}