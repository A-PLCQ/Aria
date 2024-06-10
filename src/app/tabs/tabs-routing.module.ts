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
        loadChildren: () => import('../home/home-routing.module').then(m => m.HomePageRoutingModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact-routing.module').then(m => m.ContactPageRoutingModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('../alert/alert-routing.module').then(m => m.AlertPageRoutingModule)
      },
      {
        path: 'call',
        loadChildren: () => import('../call/call-routing.module').then(m => m.CallPageRoutingModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings-routing.module').then(m => m.SettingsPageRoutingModule)
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
