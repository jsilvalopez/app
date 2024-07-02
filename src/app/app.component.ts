import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TareaModule } from './tarea/tarea.module';
import { TareaListComponent } from './tarea/tarea-list/tarea-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TareaListComponent]
})
export class AppComponent {
  title = 'tarea-app';
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


