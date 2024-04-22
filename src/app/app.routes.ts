import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CardConductorComponent } from './component/list-conductor/card-conductor.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardAutomovilComponent } from './component/list-automovil/card-automovil.component';
import { RegisterConductorComponent } from './forms/register-conductor/register-conductor.component';
import { UpdateConductorComponent } from './forms/update-conductor/update-conductor.component';


export const routes: Routes = [

    {
        path:'',
        title:'Login',
        component:LoginComponent
    },
    // {
    //     path:'inicio',
    //     title:'Inicio',
    //     component:CardConductorComponent
    // },
    {
        path:'dashboard',
        title:'Gestiones',
        component:DashboardComponent,
        children: [
            { path:'', redirectTo: 'conductores', pathMatch: 'full' },
            { path:'conductores', component: CardConductorComponent},
            { path:'detalle/conductor/:id', component: CardAutomovilComponent},
            { path:'conductor',component:RegisterConductorComponent},
            { path:'conductor/update/:id',component:UpdateConductorComponent},
            { path:'autos',component:CardAutomovilComponent},
            //{ path:'conductor/update/:id',component:UpdateConductorComponent}, poner los forms de registro y update y detalle
            //{ path:'conductor/update/:id',component:UpdateConductorComponent} poner los forms de registro y update y detalle
            // Otros componentes específicos de la sección
        ]
    }

];
