import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorImproveComponent } from '../MonitorImprove/monitorImprove.component';

const routes: Routes = [
    {
        path: 'monitor-improve',
        component: MonitorImproveComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
