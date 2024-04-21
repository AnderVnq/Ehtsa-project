import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CardConductorComponent } from './component/card-conductor/card-conductor.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardAutomovilComponent } from './component/card-automovil/card-automovil.component';


export const routes: Routes = [

    {
        path:'',
        title:'Login',
        component:LoginComponent
    },
    {
        path:'inicio',
        title:'Inicio',
        component:CardConductorComponent
    },
    {
        path:'dashboard',
        title:'Gestiones',
        component:DashboardComponent,
        children: [
            { path: '', redirectTo: 'subroute1', pathMatch: 'full' },
            { path: 'subroute1', component: CardConductorComponent},
            //{ path: 'subroute2', component: Subroute2Component, outlet: 'sectionOutlet' },
            // Otros componentes específicos de la sección
          ]
    }

];
