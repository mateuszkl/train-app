import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {TrainingFormComponent} from './training/training-form/training-form.component';
import {NotFoundComponent} from './not-found-component/not-found.component';
import {TrainingListComponent} from './training-list/training-list.component';
import {TrainingService} from './training-list/training.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TrainingFormComponent,
    NotFoundComponent,
    TrainingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
        path: 'trainings',
        component: TrainingListComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    TrainingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
