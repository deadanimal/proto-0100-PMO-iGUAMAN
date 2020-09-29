import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { BarRatingModule } from "ngx-bar-rating";

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule } from 'src/app/examples/calendar/calendar.module';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { KhidmatComponent } from './khidmat/khidmat.component';
import { AgihanComponent } from './agihan/agihan.component';
import { Feedback2Component } from './feedback2/feedback2.component';
import { AgihPegawaiComponent } from './agih-pegawai/agih-pegawai.component';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    KhidmatComponent,
    AgihanComponent,
    Feedback2Component,
    AgihPegawaiComponent,
    AppointmentComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    BarRatingModule,
    CalendarModule
  ]
})
export class AdminModule { }
