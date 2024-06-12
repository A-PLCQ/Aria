import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home-routing.module').then(m => m.HomePageRoutingModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact-routing.module').then(m => m.ContactPageRoutingModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('../pages/alert/alert-routing.module').then(m => m.AlertPageRoutingModule)
      },
      {
        path: 'call',
        loadChildren: () => import('../pages/call/call-routing.module').then(m => m.CallPageRoutingModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/account/account-routing.module').then(m => m.AccountPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
