import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from 'src/app/mixcomp/menu-page-layout/menu-page-layout.component';
import { MixcompComponent } from './mixcomp/mixcomp.component';
import { MixCardComponent } from 'src/app/mixcomp/mix-card/mix-card.component';



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
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
