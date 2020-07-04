import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passa-tempos',
  templateUrl: './passa-tempos.component.html',
  styleUrls: ['./passa-tempos.component.css']
})
export class PassaTemposComponent implements OnInit {

  escapeDaPrisão:string='https://poki.com.br/g/escapada-final-da-pris%C3%A3o?campaign=1784657719&adgroup=103758857471&target=&location=1001773&creative=434078648624&placement=rachacuca.com.br&gclid=EAIaIQobChMI9cfphZK06gIVwblRCh0O0AdZEAEYASACEgKbnfD_BwE';
  einsten:string='https://rachacuca.com.br/teste-de-einstein/';
  rachaCuca:string='https://rachacuca.com.br/';
  imageEinsten:string='https://rachacuca.com.br/media/cache/70/78/7078d20d3626848597c62a122e35c56d.png';
  rachaCucaImage:string='https://rachacuca.com.br/static/imagens/logo-racha-cuca.png';

  constructor() { }

  ngOnInit(): void {
  }

}
