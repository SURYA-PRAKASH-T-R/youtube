import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './history/history.component';
import { LibraryComponent } from './library/library.component';
import {MatRadioModule} from '@angular/material/radio';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { LikedVideoComponent } from './liked-video/liked-video.component';
import { TrendingComponent } from './trending/trending.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shorts',component:ShortsComponent},
  {path:'subscription',component:SubscriptionsComponent},
  {path:'library',component:LibraryComponent},
  {path:'history',component:HistoryComponent},
  {path:'watchlater',component:WatchLaterComponent},
  {path:'likedvideo',component:LikedVideoComponent},
  {path:'trending',component:TrendingComponent},
  {path:'music',component:MusicComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortsComponent,
    SubscriptionsComponent,
    HistoryComponent,
    LibraryComponent,
    WatchLaterComponent,
    LikedVideoComponent,
    TrendingComponent,
    MusicComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatRadioModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


