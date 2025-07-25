import { Routes } from '@angular/router';
import { ObreroComponent } from './components/obrero/obrero';
import { ObreroFormularioComponent } from './components/obrero/obreroFormulario';

export const routes: Routes = [
    { path:"", component:ObreroComponent},
    { path:":id", component:ObreroFormularioComponent}
];
