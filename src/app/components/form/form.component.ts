import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'general';
  paisSeleccionado = 'gb';

  categoria: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'enternainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'technology', nombre: 'Tecnología' },
    { value: 'sports', nombre: 'Deportes' }
  ]
  paises: any[] = [
    { value: 'gb', nombre: 'Reino Unido' },
    { value: 'de', nombre: 'Alemania' },
    { value: 'us', nombre: 'Estados Unidos' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' }
  ]

  constructor() {

  }

  ngOnInit(): void {

  }
  buscarNoticia() {
/*     console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado); */
    const PARAMETROS = {
      categoria:this.categoriaSeleccionada,
      pais:this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
