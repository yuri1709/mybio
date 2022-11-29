import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'myb-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent {
  

  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required]],
      estado: ['',[Validators.required]],
      contato:  ['',[Validators.required]],
      sobre:  ['',[Validators.required]]
    })
  }

  cadastrar(form: any) {      
    console.log(form.value);
      this.http.post<any>("http://localhost:3000/perfil/add", form.value)
  }
}


