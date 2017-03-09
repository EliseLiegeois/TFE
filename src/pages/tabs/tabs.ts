import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RecherchePage } from '../recherche/recherche';
import { CartePage } from '../carte/carte';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RecherchePage;
  tab3Root: any = CartePage;

  constructor() {

  }
}
