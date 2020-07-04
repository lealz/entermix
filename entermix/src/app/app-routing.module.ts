import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from 'src/app/mixcomp/menu-page-layout/menu-page-layout.component'
import { MixcompComponent } from './mixcomp/mixcomp.component';


const routes: Routes = [
{
  path: '',
  component: MenuPageLayoutComponent,
  children: [
    {
      path:'',
      component: MixcompComponent,
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
