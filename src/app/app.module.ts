import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TabsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
