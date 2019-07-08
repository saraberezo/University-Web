import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, MainPage, CoursesPage, ExamsPage, NotificationsPage, PersonalDataPage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

  public log_out(){
    this.navCtrl.push(HomePage,{});
  }

  public personal_data(){
    this.navCtrl.push(PersonalDataPage,{});
  }

  public notifications(){
    this.navCtrl.push(NotificationsPage,{});
  }

  public my_courses(){
    this.navCtrl.push(MainPage,{});
  }

  public courses(){
    this.navCtrl.push(CoursesPage,{});
  }

  public timetable(){
    this.navCtrl.push(TimetablePage,{});
  }

  public exams(){
    this.navCtrl.push(ExamsPage,{});
  }

}
