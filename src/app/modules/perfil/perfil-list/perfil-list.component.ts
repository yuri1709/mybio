import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PessoaInfo } from 'src/app/core/models/pessoa.interface';

@Component({
  selector: 'myb-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})

export class PerfilListComponent {

  // fotos = [
  //   {
  //     url:"https://i.imgur.com/QFMnRjo.jpeg"
  //   },{
  //     url:"https://i.imgur.com/QFMnRjo.jpeg"
  //   },{
  //     url:"https://i.imgur.com/QFMnRjo.jpeg"
  //   }
  // ]

  fotos!: PessoaInfo[]; 
  
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.pegarDadosBio()
  }
  
  pegarDadosBio() {
      //vai fazer a chamada do endPoint pegarDados do nosso backend     
      this.http.get<PessoaInfo[]>('http://127.0.0.1:3000/perfil/get')
        .subscribe(resultado => {
          this.fotos = resultado;
          console.log("perfil:" + this.fotos);
        })
   }
} 
  
 
