import { provideRouter, RouterConfig }  from '@angular/router';
import { DataComponent } from './data/data.component';
import { AboutComponent } from './about/about.component';

const routes: RouterConfig = [
    {
        path: '',
        component: DataComponent
    },
    {
        path: 'data',
        component: DataComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];