import { Routes } from '@angular/router';
import { ObreroComponent } from './features/obrero/components/obrero';
import { ObreroFormularioComponent } from './features/obrero/components/obreroFormulario';

export const routes: Routes = [
    { path:"", component:ObreroComponent},
    { path:":id", component:ObreroFormularioComponent}
];
