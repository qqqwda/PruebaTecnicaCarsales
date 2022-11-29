import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EpisodeListComponent } from './components/pages/episodes/episode-list/episode-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CharacterListComponent } from './components/pages/characters/character-list/character-list.component';
import { CharacterCardComponent } from './components/pages/characters/character-card/character-card.component';
import { CharacterCardDetailComponent } from './components/pages/characters/character-card-detail/character-card-detail.component';
import { CharacterDetailComponent } from './components/pages/characters/character-detail/character-detail.component';
import { HomeComponent } from './components/pages/home/home/home.component';

const appRoutes:Routes =[
  {path:'episodes', component:EpisodeListComponent},
  {path:'characters', component:CharacterListComponent},
  {path:'home', component:HomeComponent},
  { path: 'characters/:id', component: CharacterDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    HeaderComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterCardDetailComponent,
    CharacterDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
