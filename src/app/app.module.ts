import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { OneComponent } from './one/one.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  {path:'one',component:OneComponent},
  {path:'student',component:StudentComponent},
  {path:'staffdetails',component:StaffdetailsComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'contact',component:ContactusComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    StudentComponent,
    StaffdetailsComponent,
    AttendanceComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,MatSelectModule,
    MatSidenavModule,MatListModule,MatFormFieldModule,MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

