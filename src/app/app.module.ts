import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//MAIN APP
import { AppComponent } from './app.component';

//SERVICES
import { ExampleService }  from '../services/ExampleService';

//import pages here
import { Home } from '../pages/home/home';
import { Articles } from '../pages/articles/articles';
import { Development } from '../pages/development/development';

//import components here
import { Header } from '../components/header/header';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'articles', component: Articles },
    { path: 'development', component: Development}
];

@NgModule({
    declarations: [
        AppComponent,
        Home,
        Header,
        Articles,
        Development
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
