import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCoursePage } from './newCourse';

@NgModule({
  declarations: [
    NewCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(NewCoursePage),
  ],
})
export class NewcoursePageModule {}
