import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { ViewMoviesComponent } from './movies/view-movies/view-movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    children: [
      {
        path:'',
        component: MoviesListComponent,
      },
      {
        path: 'view-movies/:id',
        component: ViewMoviesComponent
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

