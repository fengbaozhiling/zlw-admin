import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ZlwNavComponent } from './zlw.nav.component';
import { NavRoutingModule } from './zlw.nav.route.module';




@NgModule({
    imports: [
        CommonModule,
        NavRoutingModule
    ],
    declarations: [
        ZlwNavComponent
    ]
})
export class ZlwNavModule {
}