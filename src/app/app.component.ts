import { Component } from '@angular/core';
import { Store } from '../../node_modules/@ngrx/store';
import { Action } from '@ngrx/store';

interface AppStore{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   contador: number;

   constructor(private store: Store<AppStore>) {
     this.store.subscribe( state =>{
       this.contador = state.contador
     })
    //  this.contador = 10;
   }

   incrementar() {
    //  this.contador ++;

    const accion: Action = {
      type: 'INCREMENTAR'
    };

    this.store.dispatch(accion);
   }

   decrementar() {
    //  this.contador --;

    const accion: Action = {
      type: 'DECREMENTAR'
    };

    this.store.dispatch(accion);

   }
}
