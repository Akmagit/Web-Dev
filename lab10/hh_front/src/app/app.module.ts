import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import {RouterModule} from "@angular/router";
import { AuthInterceptor } from './AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VacancyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: CompanyComponent },
      {path: 'company/:companyId/vacancies', component: VacancyComponent},
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
