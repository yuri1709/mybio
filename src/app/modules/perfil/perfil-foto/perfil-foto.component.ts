import { Component, Input } from '@angular/core';

@Component({
  selector: 'myb-perfil-foto',
  templateUrl: './perfil-foto.component.html',
  styleUrls: ['./perfil-foto.component.css']
})
export class PerfilFotoComponent {
  @Input() imagem = '';

  constructor() {}

  ngOnInit(): void {}
}
