import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, MainPage, ExamsPage, NotificationsPage, PersonalDataPage, TimetablePage,
  CoursesPage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-newcourse',
  templateUrl: 'newcourse.html',
})
export class NewCoursePage {

  course_name:any;
  bachelor:any;
  year:any;
  correct:boolean = false;

  aux:any = [];
  description_CA:any = "Computers have become an essential tool. Computers are not only manipulated from a user's --or specialized user's-- point of view, but also from the engineering perspective, as tools to be designed or to be integrated in more complex systems. Hence, the main motivation for the Computers' Architecture course is to provide students with an understanding of basic computer operation by studying the lower abstraction levels (over the electronic level). The subject Computers' Architecture is focused on the conventional machine level, describes the operating machine level and shows an example application for the Symbolic Machine domain through the introduction of the Database Management Systems.";
  description_ACN:any = "The objective of this subject is to teach our students the technical basics that govern the modern computer networks, regarding topics like new switching paradigms, new access technologies or data transport with quality of service.";
  description_FW:any = "Fields and Waves presents the first contact in the student's degree with the phenomena of electromagnetic waves, which are the physical medium for transmission of information at almost instantaneous speed. Mathematical modeling of electromagnetic fields that provide insights into the behavior of electromagnetic waves in real environments will be introduced.";
  description_DC:any = "In this subject the efficiency and reliability of data transmission using discrete memoryless channels will be analyzed, and the next issues will be introduced: lossless data compression methods, linear error control codes, data link layer protocols, and multiple access channels protocols and technologies.";
  description_MSP:any = "	Multimedia signal processing is now a fundamental part of any modern information, communication, learning, and entertainment system. Once the main Digital Signal Processing concepts and bases have been introduced in the second year, this course prepares students for the analysis and processing of deterministic and random signals, before encoding and transmission of multimedia information. In related courses both on this and next academic year, the knowledge acquired shall be applied to voice, audio, image and video signals and systems,.  The main goals of the course are: Analyze digital signal processing schemes. design digital filters according to prescribed specifications. analyze and specify the basic parameters of communication subsystems from the point of view of signal processing. apply statistical filtering in coding, processing and transmission of multimedia information. To help in reaching these goals, the course is divided into four major topics: DFT and Fast Fourier Transform, Fundamentals of statistical signal processing, digital filter characterization and multirate signal processing.";
  description_DSP:any = "Digital signal processing is nowadays a feature of most everyday communications and entertainment devices. The aim of this course is to equip students with a mathematical grounding in general signal and systems analysis. In subsequent course subjects, this knowledge will be applied to specific applications of signals and systems, including audio, image, video and voice signals.";
  description_WMN:any = "The subject examines the area of wireless and mobile networks, one of the technological basis of the present society, studying the existing challenges for the communications protocols, and looks at the opportunities that provides continuous connectivity even in movement. The focus of this subject will be on network protocols above physical layer (nevertheless, it will touch the most important physical layer properties).";
  description_ISP:any = "This course will begin providing the notion of agent, to comprise what is, how build it and how can, the agents interact for modeling and solving complex problems. Later we will study the design, implementation and application of intelligent agents and multiagent systems in current communications technologies and relate them with other current paradigms such as: object oriented programming, mobile agents, the management distributed of networks, the adaptive user interfaces and the electronic commerce. The students will learn to program multiagent systems in suitable platforms and mobile terminals (Android). Besides, they will perform a work in group, where they will extend the concepts studied in the subject to other topics of their own interest.";
  description_ISD:any = "Embedded systems are part of almost all the diary activities that involve an electronic device (the alarm clock, the mobile phone, the car...). This course introduces the main concepts behind modern embedded systems that include an operating system, and puts them in practice through a series of exercises and projects. The documentation will be provided in English.";
  description_NST:any = "The objective pursued with this course is that students acquire mastery of the basic methods of analysis for predicting the performance of networks, services and telecommunication systems, in terms of the amount of traffic they carry, the physical structure of the system and the way it is interconnected, the capacity of its constituent network elements and the algorithms used in them.";
  description_IS:any = "The aim of this subject is to introduce to the student in the main technologies to process and store the information, like central element of the telematic services";
  description_TAS:any = "This course focuses on the architectonic solutions for the design of distributed systems. More specifically, the course is oriented to scenarios based on services (service-oriented architectures) and the deployment of SOA solutions by means of Web Services Technologies (WS-*). Taking the WS-* stack as our techonological layout, the course focuses on the description, discovery and invocation of services in SOA. Finally, the course introduces models for services composition in SOA (again using Web Services as deployment technology).";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course_name = this.navParams.get("name");
    this.bachelor = this.navParams.get("bachelor");
    this.year = this.navParams.get("year");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcoursePage');
  }

  ionViewWillEnter() {
    this.correct = false;
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

  public enterKey(key) {
      this.correct = true;
  }

}
