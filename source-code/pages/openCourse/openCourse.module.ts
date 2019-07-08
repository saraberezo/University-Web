import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenCoursePage } from './openCourse';

@NgModule({
  declarations: [
    OpenCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(OpenCoursePage),
  ],
})
export class OpencoursePageModule {}
