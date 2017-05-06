import { Component, ViewChild } from '@angular/core';

//import pages here
import { Home } from '../pages/home/home';
import { Articles } from '../pages/articles/articles';
import { Development } from '../pages/development/development';

//import components here
import { Header } from '../components/header/header';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent { }
