import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardService} from './dashboard/dashboard.service';
import {RouterModule} from '@angular/router';
import {TrainingFormComponent} from './training/training-form/training-form.component';
import {NotFoundComponent} from './not-found-component/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TrainingFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'new',
        component: TrainingFormComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
