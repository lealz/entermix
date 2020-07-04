import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from 'src/app/mixcomp/menu-page-layout/menu-page-layout.component'
import { MixcompComponent } from './mixcomp/mixcomp.component';
import { componentFactoryName } from '@angular/compiler';
import { AboutUsComponent } from './about-us/about-us.component';
import {ContatoComponent} from './contato/contato/contato.component'


const routes: Routes = [
{
  path: '',
  component: MenuPageLayoutComponent,
  children: [
    {
      path:'',
      component: MixcompComponent,
    },
    {
      path:'aboutUs',
      component: AboutUsComponent,
    },
    {
      path:'contato',
      component: ContatoComponent,
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
