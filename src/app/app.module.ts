import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/effects/effects.movies';
import { MenuHeaderComponent } from './menu-header/menu-header.component';

@NgModule({
  declarations: [AppComponent, MoviesListComponent, MenuHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      ROOT_REDUCERS
    ),
    StoreDevtoolsModule.instrument({
      name: 'TEST'
    }),
    EffectsModule.forRoot([MoviesEffects])
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
