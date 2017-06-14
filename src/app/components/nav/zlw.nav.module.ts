import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ZlwNavComponent } from './zlw.nav.component';
import { navRoutingModule } from './zlw.nav.route.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ZlwNavComponent },
            navRoutingModule
        ])
    ],
    exports: [
        RouterModule,
        ZlwNavComponent
    ]
})
export class ZlwNavModule { }