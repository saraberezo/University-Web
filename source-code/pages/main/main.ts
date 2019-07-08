import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, CoursesPage, ExamsPage, NotificationsPage, PersonalDataPage,
  TimetablePage, OpenCoursePage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  name:any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
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

  public open_course(name) {

    this.name = name;
    this.navCtrl.push(OpenCoursePage,{"name": this.name});
  }

}
