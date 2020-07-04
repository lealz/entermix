import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { AboutUsComponent } from './about-us/about-us.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

=======
import { MixcompComponent } from './mixcomp/mixcomp.component';
<<<<<<< HEAD
>>>>>>> ba2dcb54f75c8266aed96067e09bc912199fdd66
=======
import { MenuPageLayoutComponent } from './mixcomp/menu-page-layout/menu-page-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
>>>>>>> 0c2bf1134cc543384f1de69100d2baa3a981ceb4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    AboutUsComponent
=======
    MixcompComponent
>>>>>>> ba2dcb54f75c8266aed96067e09bc912199fdd66
=======
    MixcompComponent,
    MenuPageLayoutComponent
>>>>>>> 0c2bf1134cc543384f1de69100d2baa3a981ceb4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatCardModule,
    FormsModule
=======
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
>>>>>>> 0c2bf1134cc543384f1de69100d2baa3a981ceb4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
