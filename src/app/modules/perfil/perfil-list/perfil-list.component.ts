import { Component } from '@angular/core';
import { PessoaInfo } from 'src/app/core/models/pessoa.interface';

import { ServerJsonService } from '../service/server-json.service';
@Component({
  selector: 'myb-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})

export class PerfilListComponent  {


  perfis!: PessoaInfo[]; 
  
  constructor(
    private jsonService: ServerJsonService
    ) { }

  ngOnInit(): void {
   this.pegarDadosBio()
  }

  pegarDadosBio() {
     this.jsonService.getData().subscribe(resultado => this.perfis = resultado);
   }

   deletarDadosBio(id: number) {
    this.jsonService.delData(id)
   }
} 
  
 
