import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

=======
import { FormsModule } from '@angular/forms'
>>>>>>> 68ae0e8111276a873cba4ee2540af3bef5015571
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatCardModule } from '@angular/material/card';
import { MixcompComponent } from './mixcomp/mixcomp.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MixCardComponent } from './mixcomp/mix-card/mix-card.component';
import { MenuPageLayoutComponent } from './mixcomp/menu-page-layout/menu-page-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { core } from '@angular/compiler';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MixcompComponent,
    MixCardComponent,
    MenuPageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
