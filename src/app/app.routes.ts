import { Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { MultipleComponent } from './multiple/multiple.component';
import { ArrayComponent } from './array/array.component';
import { InteractiveComponent } from './interactive/interactive.component';

export const routes: Routes = [
	{path: '', component: SimpleComponent},
	{path: 'multiple', component: MultipleComponent},
	{path: 'array', component: ArrayComponent},
	{path: 'interactive', component: InteractiveComponent}
];
