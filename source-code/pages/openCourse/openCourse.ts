import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, MainPage, CoursesPage, ExamsPage, NotificationsPage, PersonalDataPage,
  TimetablePage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-opencourse',
  templateUrl: 'opencourse.html',
})
export class OpenCoursePage {

  course_name:any = "";
  description_algebra:any = "The subject Linear Algebra is taught with the main objective of providing students with a clear understanding of the complex numbers, systems of linear equations and elementary techniques of matrix algebra as well as an introduction to the fundamental concepts of Vector Spaces which will be needed in later subjects. It will be paid special attention to the applications of Linear Algebra.";
  description_IP:any = "Teaching students the algorithms of image processing and analysis.";
  description_GUI:any = "To familiarize students with the principles of graphic design of user interfaces, their programming principles. Acquisition of practical skills in the field of graphic graphical user interfaces in various programming environments.";
  description_CN = "The aim of the classes is to acquaint students with computer networks management (including configuration and security fundamental) and its monitoring.";
  description_AI:any = "Presentation of contexts where one needs 'intelligent' data analysis and AI systems. Explanation of main artificial intelligence strategies: crisp and fuzzy logic, stochastic optimization and artificial neural networks.";
  description_OS:any = "The aim of this subject is that the student was able to learn the foundations of the current operating systems and to comprise its importance inside the architecture of a computer.";
  description_CH:any = "No description available.";
  description_Firewalls:any = "No description available.";

  documents_algebra:any = ["Lecture 1", "Lecture 2", "Exercices (First part)", "Lecture 3", "Project explanation", "Exercices (Second Part)"];
  documents_IP:any = ["Laboratory 1", "Laboratory 2", "Laboratory 3", "Images", "Lectures 1-2-3"];
  documents_GUI:any = ["1st project explanation", "2nd project explanation", "3rd project explanation", "Lecture slides"];
  documents_CN = ["router-image", "video-explanation", "virtualbox_link"];
  documents_AI:any = ["Final project explanation", "Lectures"];
  documents_OS:any = ["linux-image", "Lecture 1-2", "Lab. 1-2-3"];
  documents_CH:any = ["Lectures 1-5", "Exercices lab. 2"];
  documents_Firewalls:any = ["Introduction to Firewalls", "Lecture-1"];

  grades_algebra:any = ["Exam lecture 1: 3,5", "Exam lecture 2: 1", "Exercices (First part): 4"];
  grades_IP:any = ["Exam 1: 2,5", "Laboratory: Fail"];
  grades_GUI:any = ["1st project: 4", "2nd project: 1"];
  grades_CN = ["Laboratory 1: Present and exercices done"];
  grades_AI:any = ["Final project: 2,5", "Essay: 4"];
  grades_OS:any = ["No grades available"];
  grades_CH:any = ["No grades available"];
  grades_Firewalls:any = ["No grades available"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.course_name = this.navParams.get("name");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpencoursePage');
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
