import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      Hello Angular
    </h1>
  `,
  styles: [
  ]
})
export class SimpleComponent {

}
