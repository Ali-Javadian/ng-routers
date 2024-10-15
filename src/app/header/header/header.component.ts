import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,RouterOutlet,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() navColor: string = "lightblue";

  componentName= "HeaderComponent"
  changeColor() {
    this.navColor = this.navColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  }
  

  @Output() messageEvent = new EventEmitter<string>();  // Declare an EventEmitter

  sendMessage() {
    this.messageEvent.emit(this.componentName);  // Emit the event
  }
}
