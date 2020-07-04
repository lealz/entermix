import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from 'src/app/mixcomp/menu-page-layout/menu-page-layout.component';
import { MixcompComponent } from './mixcomp/mixcomp.component';
<<<<<<< HEAD
import { MixCardComponent } from 'src/app/mixcomp/mix-card/mix-card.component';

=======
import { componentFactoryName } from '@angular/compiler';
import { AboutUsComponent } from './about-us/about-us.component';
import {ContatoComponent} from './contato/contato/contato.component'
>>>>>>> 68ae0e8111276a873cba4ee2540af3bef5015571


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
<<<<<<< HEAD
      path:'',
      component: MixCardComponent
    }
=======
      path:'aboutUs',
      component: AboutUsComponent,
    },
    {
      path:'contato',
      component: ContatoComponent,
    },
>>>>>>> 68ae0e8111276a873cba4ee2540af3bef5015571
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
