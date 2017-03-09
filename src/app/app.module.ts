import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RecherchePage } from '../pages/recherche/recherche';
import { TutorielPage } from '../pages/tutoriel/tutoriel';
import { ArchivesPage } from '../pages/archives/archives';
import { ProfilPage } from '../pages/profil/profil';
import { EntreprisePage } from '../pages/entreprise/entreprise';
import { ListPage } from '../pages/list/list';
import { PostPage } from '../pages/post/post';
import { CartePage } from '../pages/carte/carte';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    RecherchePage,
    TutorielPage,
    ArchivesPage,
    ProfilPage,
    EntreprisePage,
    ListPage,
    PostPage,
    CartePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecherchePage,
    TutorielPage,
    EntreprisePage,
    ArchivesPage,
    ListPage,
    PostPage,
    ProfilPage,
    CartePage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
