import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EpisodeDetailComponent } from './components/pages/episodes/episode-detail/episode-detail.component';
import { EpisodeListComponent } from './components/pages/episodes/episode-list/episode-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeDetailComponent,
    EpisodeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
