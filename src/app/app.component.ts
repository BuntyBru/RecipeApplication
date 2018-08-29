import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  loadedFeature = 'recipe';

  ngOnInit(){
  	firebase.initializeApp({
  	apiKey: "AIzaSyDlMqI3pgBdEXk4QsVHO_yKQDI3Sb2Y_18",
    authDomain: "ng-recipe-book-e101c.firebaseapp.com"
  	});
  }


  onNavigate(featured: string)
  {
  this.loadedFeature = featured;

  }
}
