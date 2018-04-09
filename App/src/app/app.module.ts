import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MonitorImproveComponent } from './MonitorImprove/monitorImprove.component';
import { ProgramPageTileComponent } from './program-page-tiles/program-page-tile.component';
import { AppRoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MonitorImproveComponent,
    ProgramPageTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
