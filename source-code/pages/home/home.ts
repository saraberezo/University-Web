import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainPage } from '../index.pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fail:boolean = false;

  constructor(public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.fail = false;
  }

  public login(email, password){
    if(email != null && password != null)
      this.navCtrl.push(MainPage,{});
    else
      this.fail = true;

  }

}
