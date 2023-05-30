import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GetTransalte } from './module/core/translation/get-translate';
import { HomeModule } from './module/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: GetTransalte
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
