import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixcomp',
  templateUrl: './mixcomp.component.html',
  styleUrls: ['./mixcomp.component.css']
})
export class MixcompComponent implements OnInit {

  titulo: string = "meu primeiro componente!";
  dados: string;

  constructor() { }

  ngOnInit(): void {
  }

}
