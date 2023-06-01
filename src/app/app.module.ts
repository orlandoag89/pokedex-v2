import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { GetTransalte } from '@core/translator';
import { HomeModule } from '@modules';
import { ROOT_REDUCER } from './module/core/state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: GetTransalte
      }
    }),
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 24, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
