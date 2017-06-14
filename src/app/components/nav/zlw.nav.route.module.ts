import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ZlwNavComponent } from './zlw.nav.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ZlwNavComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class NavRoutingModule { }