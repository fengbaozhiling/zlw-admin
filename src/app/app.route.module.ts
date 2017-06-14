import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'setup', loadChildren: './components/nav/zlw.nav.module#ZlwNavModule' }

        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
