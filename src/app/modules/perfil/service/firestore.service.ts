import { Injectable } from "@angular/core";
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from "rxjs";

import { PessoaInfo } from "src/app/core/models/pessoa.interface";


@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    
    constructor(private firestore:Firestore) {}
    
    private dbPath = '/myBio';
    getPerfils() {
        let $perfilRef=collection(this.firestore, this.dbPath);
        return collectionData($perfilRef) as Observable<PessoaInfo[]>
    }  
}
