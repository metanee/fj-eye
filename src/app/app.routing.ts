import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserByIdComponent} from './components/user-by-id/user-by-id.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
const appRoutes: Routes = [
  {
      path : '',
      redirectTo: '/login',
      pathMatch: 'full'
  },
  {
      path : 'login',
      component: LoginComponent
  },
  {
    path : 'userList',
    component: UserListComponent
  },
  {
    path : 'viewUser/:id',
    component: UserByIdComponent
  },
  {
    path : 'employeeList',
    component: EmployeeListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
