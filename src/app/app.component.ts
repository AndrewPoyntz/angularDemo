import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <button routerLink="">Simple Component</button>
    <button routerLink="multiple">Multiple simple components</button>
    <button routerLink="array">Array output</button>
    <button routerLink="interactive">Interactive array</button>
    <hr>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.styles.scss'],
})
export class AppComponent {
  title = 'angularDemo';
}
