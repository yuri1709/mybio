import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerJsonService } from '../service/server-json.service';

@Component({
  selector: 'myb-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent {
  

  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private jsonService: ServerJsonService
    ){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required]],
      sobrenome: ['',[Validators.required]],
      email: ['',[Validators.required,]],
      telefone: ['',[Validators.required]],
      estado: ['',[Validators.required]],
      sobre:  ['',[Validators.required]],
      imgUrl:  ['',[Validators.required]]
      
    })
  }
  //cadastrar do realTime database
  // cadastrar(form: any) {      
  //   this.realTimeDb.addPerfil(form.value)
  // }

  avisarCadastro() {
    window.alert("Cadastrado com sucesso!");
  }

  cadastrar(form: any) {
      this.jsonService.setData(form.value)
  }

}


