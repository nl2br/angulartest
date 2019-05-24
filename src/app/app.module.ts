import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { StudentComponent } from './student/student.component';
import { IsMajeurPipe } from './is-majeur.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NotificationComponent } from './notification/notification.component';

// http
import { HttpClientModule } from '@angular/common/http';
// fake API
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    StudentComponent,
    IsMajeurPipe,
    HomeComponent,
    StudentDetailsComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
