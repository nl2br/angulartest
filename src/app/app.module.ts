import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { StudentComponent } from './student/student.component';
import { IsMajeurPipe } from './is-majeur.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    StudentComponent,
    IsMajeurPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
