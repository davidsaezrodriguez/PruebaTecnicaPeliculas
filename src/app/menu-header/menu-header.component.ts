import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.sass']
})
export class MenuHeaderComponent implements OnInit {

  returnPageVisible = true;
  namePage = '';

 getNamePage(url: string){
  switch(url){
    case '/':
      return 'Peliculas'
    case '/movie':
      return 'Peliculas'
    case 'new-film':
      return 'Nueva pelicula'
    default:
      return ''
  }

 }

 goBack(){
  this.location.back();
 }
  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    if(this.router.url != '/'){
      this.returnPageVisible = true;
    }
    this.namePage = this.getNamePage(this.router.url)
  }

}
