import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [CommonModule],
  template: `
      <p *ngFor="let item of anArray">{{item}}</p>
  `,
  styles: [
  ]
})
export class ArrayComponent {
  anArray:string[] = ['hello', 'angular']
}
