import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PessoaInfo } from "src/app/core/models/pessoa.interface";

@Injectable({
    providedIn: 'root'
})
export class ServerJsonService {
    
    httpOptions = {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }

    constructor(private http: HttpClient) {}

    readonly API = " http://localhost:3000/perfis/";

    getData() {
        return this.http.get<PessoaInfo[]>(this.API);
    }

    setData(valor: any) {
        return this.http.post(this.API, JSON.stringify(valor), this.httpOptions).subscribe();
    }

    delData(id: number) {
        return this.http.delete(this.API + id).subscribe();
    }   
}