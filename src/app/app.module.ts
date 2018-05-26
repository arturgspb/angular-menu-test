import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatVerticalStepper
} from '@angular/material';
import {PageNotFoundComponent} from './not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from './page.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AppNavComponent } from './app-nav/app-nav.component';


const appRoutes: Routes = [
  {
    path: 'page',
    component: PageComponent,
    data: {title: 'Heroes List'}
  },
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageComponent,
    AppNavComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only

      }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    LayoutModule,
    MatStepperModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
