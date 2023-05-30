import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from '../simple/simple.component';

@Component({
  selector: 'app-multiple',
  standalone: true,
  imports: [CommonModule, SimpleComponent],
  template: `
      <app-simple-component/>
      <app-simple-component/>
  `,
  styles: [
  ]
})
export class MultipleComponent {

}
