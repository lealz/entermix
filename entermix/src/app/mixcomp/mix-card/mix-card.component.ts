import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-card',
  templateUrl: './mix-card.component.html',
  styleUrls: ['./mix-card.component.css']
})
export class MixCardComponent implements OnInit {

  titulo: string = "Seja bem vindo ao EnterMix";

  constructor() { }

  ngOnInit(): void {
  }

}
