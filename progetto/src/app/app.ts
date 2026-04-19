import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mauro } from './mauro/mauro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Mauro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('progetto');
}
