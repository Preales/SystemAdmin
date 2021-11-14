//Importar los modulos de router de angular 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importar Componentes
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { AddEditEmployeeComponent } from './components/employee/add-edit-employee/add-edit-employee.component';

//Array de rutas
const appRoutes: Routes = [
    { path: 'user', component: UserComponent},
    { path: 'user/registration', component : RegistrationComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'employee/add', component: AddEditEmployeeComponent },
    { path: 'employee/edit/:id', component: AddEditEmployeeComponent },
    { path: '**', redirectTo: 'user'}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);