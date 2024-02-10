import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clasic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clasic.component.html',
  styleUrl: './clasic.component.css'
})
export class ClasicComponent {

  numberKey: number = 10;

  keys: Array<{ note: String }> = [
    {
      note: "Do"
    },
    {
      note: "Re"
    },
    {
      note: "Mi"
    },

    {
      note: "Fa"
    },

    {
      note: "Sol"
    },

    {
      note: "La"
    },

    {
      note: "Si"
    },

    {
      note: "Do"
    },

    {
      note: "Re"
    },


  ];

  playSound(key: number): void {
    console.log("key press ", key)

    if (key === 1) {
      const audio = new Audio('doja.mp3');
      audio.play();
    } 
  }





}
