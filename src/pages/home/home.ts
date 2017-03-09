import { Component } from '@angular/core';

import { ArchivesPage } from '../archives/archives';
import { TutorielPage } from '../tutoriel/tutoriel';
import { RecherchePage } from '../recherche/recherche';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

ArchivesPage = ArchivesPage;
TutorielPage = TutorielPage;
RecherchePage = RecherchePage;
  constructor(public navCtrl: NavController) {

  }

}
