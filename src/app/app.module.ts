import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/components/content.component';
import { FilterCountryPipe } from './filter-country.pipe';
import { FilterIncPipe } from './filter-inc.pipe';
import { DeathsPipe } from './deaths.pipe';
import { FilterDecPipe } from './filter-dec.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FilterCountryPipe,
    FilterIncPipe,
    DeathsPipe,
    FilterDecPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
