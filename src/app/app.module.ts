import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SimpleRouteComponent } from './simple-route/simple-route.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { UsermanComponent } from './userman/userman.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRouteComponent,
    WorkspaceComponent,
    UsermanComponent,
    UserComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
});
export class AppModule { }
