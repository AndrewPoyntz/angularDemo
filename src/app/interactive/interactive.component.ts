import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactive',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button (click)="addItem()">Add item</button> array length = {{anArray.length}}
      <p *ngFor="let item of anArray">{{item}}</p>
    </div>
  `,
  styles: [
  ]
})
export class InteractiveComponent {
  anArray:string[] = ['pre-existing item']
  addItem(){
    this.anArray.push('item added');
  }
}
