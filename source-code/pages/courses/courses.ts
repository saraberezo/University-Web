import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, MainPage, ExamsPage, NotificationsPage, PersonalDataPage, TimetablePage,
NewCoursePage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  aux:any = [];
  all_courses:any = [
    {name: "Computers architecture", bachelor: "Informatyka", year: "1st year (Winter semester)"},
    {name: "Advanced Computer Networking", bachelor: "Informatyka", year: "3rd year (Winter semester)"},
    {name: "Fields and Waves", bachelor: "Information Technology", year: "1st year (Summer semester)"},
    {name: "Data Communication", bachelor: "Information Technology", year: "2nd year (Winter semester)"},
    {name: "Multimedia Signal Processing", bachelor: "Information Technology", year: "2nd year (Summer Semester)"},
    {name: "Digital Signal Processing", bachelor: "Information Technology", year: "2nd year (Winter Semester)"},
    {name: "Wireless and mobile networks", bachelor: "Computer Science", year: "4th year (Winter Semester)"},
    {name: "Intelligent systems programming", bachelor: "Computer Science", year: "4th year (Winter Semester)"},
    {name: "Integrated systems design", bachelor: "Computer Science", year: "3rd year (Summer Semester)"},
    {name: "Network and Switching Theory", bachelor: "Computer Science", year: "2nd year (Summer Semester)"},
    {name: "Information Systems", bachelor: "Computer Science", year: "3rd year (Winter Semester)"},
    {name: "Telematics arquitectures and services", bachelor: "Computer Science", year: "3rd year (Summer Semester)"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
    this.aux = this.all_courses;
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

  public new_course(name, bachelor, year) {
    let c_name = name;
    let c_bach = bachelor;
    let c_year = year;
    this.navCtrl.push(NewCoursePage,{"name": c_name, "bachelor": c_bach, "year": c_year});
  }

  public getCourseName(ev:any) {
    let val = ev.target.value;

    if(val == undefined)
      val = "";

    this.aux = this.all_courses.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }

  public getCourseBachelor(ev:any) {
    let val = ev.target.value;

    if(val == undefined)
      val = "";

    this.aux = this.all_courses.filter((item) => {
      return (item.bachelor.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }

  public getCourseYear(ev:any) {
    let val = ev.target.value;

    if(val == undefined)
      val = "";

    this.aux = this.all_courses.filter((item) => {
      return (item.year.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }

}
