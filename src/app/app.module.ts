import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';

@NgModule({
  declarations: [
    StudentsListComponent,
    StudentDetailsComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StudentsListComponent]
})
export class AppModule { }
