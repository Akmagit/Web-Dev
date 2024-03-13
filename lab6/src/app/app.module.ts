import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HeadComponent } from './head/head.component';
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "albums",
    component: AlbumsComponent
  },

  {
    path: "albums/:id",
    component: AlbumDetailComponent
  },

  {
    path: "albums/:id/photos",
    component: AlbumPhotosComponent
  },
  {
    path: "",
    redirectTo: 'home',
    pathMatch:"full"
  }
];

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        AlbumsComponent,
        AlbumDetailComponent,
        AlbumPhotosComponent,
        HeadComponent,
    ],
    providers: [],
    exports: [
        HeadComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }