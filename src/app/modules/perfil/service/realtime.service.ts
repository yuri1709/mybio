import { Injectable } from "@angular/core";
import {Database, set, ref, update, onValue } from "@angular/fire/database"
import { Observable } from "rxjs";
import { PessoaInfo } from "src/app/core/models/pessoa.interface";


@Injectable({
    providedIn: 'root'
})
export class RealtimeService {

    constructor (private database: Database){}


    //its working (DESATIVADO)
    addPerfil(perfil: PessoaInfo) {
        set(ref(this.database, 'perfis/' + perfil.id ),{
            imgUrl: perfil.imgUrl, 
            nome: perfil.nome,
            sobrenome: perfil.sobrenome,
            sobre: perfil.sobre,
            idPessoa: perfil.id,
            email: perfil.email,
            telefone: perfil.telefone,
            estado: perfil.estado
        })
        return true
    }

    // getPerfil(){
    //     return new Promise<any>((resolve)=> 
    //     this.database.)
    //https://www.youtube.com/watch?v=CC0GuG2uVwQ&t=1455s }
}