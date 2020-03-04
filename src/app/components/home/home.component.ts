import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { ListaDeProdutosComponent } from '../lista-de-produtos/lista-de-produtos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  grupoAtivo: Grupo = null;
  listarGrupo(grupo: Grupo) {
    console.log(grupo);
  }

  ngOnInit(): void {
  }

}
