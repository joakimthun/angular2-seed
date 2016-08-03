import { provideRouter, RouterConfig }  from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'start', 
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];