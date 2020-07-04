import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from 'src/app/mixcomp/menu-page-layout/menu-page-layout.component';
import { MixcompComponent } from './mixcomp/mixcomp.component';
import { MixCardComponent } from 'src/app/mixcomp/mix-card/mix-card.component';
import { TutorCardComponent} from './tutor-card/tutor-card.component'
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
      path:'',
      component: MixCardComponent
    },
    {
      path:'aboutUs',
      component: AboutUsComponent
    },
    {
      path:'contato',
      component: ContatoComponent
    },
    {
      path:'tutores',
      component: TutorCardComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
