import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { DataListComponent } from './data-list/data-list.component';
import { DynamicDataListComponent } from "./dynamic-data-list/dynamic-data-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet,DynamicDataListComponent, RouterLink, CommonModule, DataListComponent, FormsModule, DynamicDataListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = "app-component"



}
