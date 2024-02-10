import { Routes } from '@angular/router';
import { ClasicComponent } from './modules/pian-clasic/clasic/template/clasic/clasic.component';

export const routes: Routes = [

    {
        path: 'clasic',
        component: ClasicComponent
    },
    {
        path: '',
        component: ClasicComponent
    },
];
