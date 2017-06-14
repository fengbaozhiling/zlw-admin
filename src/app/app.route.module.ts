import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/hom.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'setup', loadChildren: './components/nav/zlw.nav.module#ZlwNavModule' }

        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
