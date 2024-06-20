import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AutoComponent } from './components/auto/auto.component';
import { PlaneComponent } from './components/plane/plane.component';
import { ShipComponent } from './components/ship/ship.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    AutoComponent,
    PlaneComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
