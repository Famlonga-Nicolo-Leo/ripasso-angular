import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mauro',
  imports: [],
  templateUrl: './mauro.html',
  styleUrl: './mauro.css',
})
export class Mauro implements OnInit {
  @Input() name!: string; // Riceve UNA stringa alla volta
  
  constructor() {
    // Lascia vuoto! Il nome arriverà dal padre
  }
  ngOnInit() { }
}
