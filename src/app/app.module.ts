import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { GetTransalte } from '@core/translator';
import { PokeDialogService } from '@shared/libs/dialog';

import { AppComponent } from './app.component';
import { ROOT_REDUCER } from './module/core/state/app.state';
import { environment } from 'src/environments/environment';
import { RootModule } from './module/root';
import { PokeNavBarModule } from '@dumbs-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RootModule,
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
    StoreDevtoolsModule.instrument({ maxAge: 24, logOnly: environment.production }),
    PokeNavBarModule
  ],
  providers: [
    PokeDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
