import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AboutComponent } from './home/about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLinkActive,RouterOutlet,RouterLink, FormsModule ,HeaderComponent , DashboardComponent, AboutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = "app-component"


  // output system
  receivedMessage: string="";
  outputer = "";

  receiveMessage(message: string) {
    this.receivedMessage = message;
    this.outputer = message;
      // Handle the event emitted by the child
  }


}
