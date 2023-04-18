import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NewLoginComponent } from './components/new-login/new-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent,
    GridComponent,
    PortifolioComponent,
    GaleriaComponent,
    NewLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
