import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { AboutUsComponent } from './about-us/about-us.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

=======
import { MixcompComponent } from './mixcomp/mixcomp.component';
>>>>>>> ba2dcb54f75c8266aed96067e09bc912199fdd66

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AboutUsComponent
=======
    MixcompComponent
>>>>>>> ba2dcb54f75c8266aed96067e09bc912199fdd66
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
