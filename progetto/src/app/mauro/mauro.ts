import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mauro',
  imports: [],
  templateUrl: './mauro.html',
  styleUrl: './mauro.css',
})
export class Mauro implements OnInit {
  name: string;
  constructor(){
    this.name = "felipe"
  }
ngOnInit() {
  }
}
