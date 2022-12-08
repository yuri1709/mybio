import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RealtimeService } from '../service/realtime.service';
import {Database, set, ref, update} from "@angular/fire/database"
import { PessoaInfo } from 'src/app/core/models/pessoa.interface';
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
      email: ['',[Validators.required]],
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

  cadastrar(form: any) {
      this.jsonService.setData(form.value)
  }

}


