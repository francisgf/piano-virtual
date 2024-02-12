import { CommonModule, } from '@angular/common';
import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-clasic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clasic.component.html',
  styleUrl: './clasic.component.css'
})
export class ClasicComponent {

  numberKey: number = 10;
  strAudio:string="" ;

  strNotesSounds: Array<{note:string,routeSound:string}>=[
    {
      note:"Do1",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    },
    {
      note:"Re1",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    },
    {
      note:"Mi1",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    },
    {
      note:"Fa1",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    },
    {
      note:"Sol1",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    },
    {
      note:"La1",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    },
    {
      note:"Si1",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    },
    {
      note:"Do2",
      routeSound:"../../../../../../assets/piano_1.mp3" 
    }


  ];

  playSound(keyNote: string, index:number): void {
    console.log("key press ", keyNote)

   
    if (keyNote === this.strNotesSounds[index].note) {
      this.strAudio=this.strNotesSounds[index].routeSound;
      const audio = new Audio(this.strAudio);
      //audio.src=this.strAudio;
      audio.play();
    } 
  }

/**for ketboard */

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'k' || event.key === 'K') {
      const audio = new Audio("../../../../../../assets/piano_1.mp3" );
      //audio.src=this.strAudio;
      audio.play();
    }
  }



}
