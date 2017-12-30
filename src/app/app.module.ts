import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { TranslateComponent } from './translate/translate.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



export function HttpLoaderFactory(http: HttpClient) {

  return  new TranslateHttpLoader(http, "assets/i18n/", ".json");
}
const appRoutes:Routes=[
  
      {
        path:'translatecomponent',
        component:TranslateComponent
      },
  
]

@NgModule({
  declarations: [
    AppComponent,
    ValidateUserComponent,
    TranslateComponent,
    HttpClientModule,
    
  ],
  imports: [
   BrowserModule,
   HttpClientModule,
   TranslateModule.forRoot({
     loader: {
       provide: TranslateLoader,
       useFactory: HttpLoaderFactory,
       deps: [HttpClient]
     }
   }),
   RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
