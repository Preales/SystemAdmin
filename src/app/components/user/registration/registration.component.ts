import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstCapitalLetter } from 'src/app/utils/validators/firstcapitalletter';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form : FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
         nombre : ['',{
           validators : [Validators.required, Validators.minLength(4), firstCapitalLetter()]
         }]
    },{ updateOn: 'blur' });
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    console.log(campo);
    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('minlength')){
      return 'La longitud minima es de 4 caracteres';
    }
    
    if(campo.hasError('firstCapitalLetter')){
      return campo.getError('firstCapitalLetter').messageError;
    }
    return '';
  }
  guardarDatos() :void{

  }

}
