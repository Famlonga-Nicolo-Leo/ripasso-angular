import { Component ,OnInit} from '@angular/core';
import { Mauro } from '../mauro/mauro';

@Component({
  selector: 'app-list',
  imports: [Mauro],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  names: string[]; // Il contenitore con tutti i nomi

  constructor() {
    this.names = ["Alice", "Giovanni", "Mella", "Perella"];
  }
  ngOnInit() { }
}