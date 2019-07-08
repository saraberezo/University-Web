import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, MainPage, CoursesPage, ExamsPage, NotificationsPage, TimetablePage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-personaldata',
  templateUrl: 'personaldata.html',
})
export class PersonalDataPage {

  id:any = null;
  student_id:any = null;
  student_email:any = null;
  address:any = null;
  postalcode:any = null;
  city:any = null;
  country:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("construc "+this.address);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaldataPage');
    console.log("ionview "+this.address);
  }

  ionViewDidEnter() {
    if(this.id == null)
    this.random_id();

    if(this.student_id == null)
      this.random_student_id();
    
    this.student_email = this.student_id+"@edu.p.lodz.pl";
  
    if(this.address == null)
      this.address = "Ul. Piotrkowska 6";
      
    if(this.postalcode == null)
      this.postalcode = "90-004";

    if(this.city == null)
      this.city = "Łódź";

    if(this.country == null)
      this.country = "Poland";
      
  }

  random_id() {
    this.id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 10; i++)
      this.id += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  random_student_id() {
    this.student_id = "";
    var possible = "0123456789";
  
    for (var i = 0; i < 7; i++)
      this.student_id += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  save(address) {
    this.address = address;
console.log("save: "+this.address);
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
