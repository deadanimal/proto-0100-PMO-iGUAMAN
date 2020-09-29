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

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DaftarComponent } from './daftar/daftar.component';
import { TestComponent } from './test/test.component';
import { RespondenComponent } from './responden/responden.component';
import { KahwinComponent } from './kahwin/kahwin.component';
import { AnakComponent } from './anak/anak.component';
import { PenjagaComponent} from './penjaga/penjaga.component';
import { TemujanjiComponent } from './temujanji/temujanji.component';
import { BayaranComponent } from './bayaran/bayaran.component';
import { CalendarModule } from 'src/app/examples/calendar/calendar.module';
import { KategoriComponent } from './kategori/kategori.component';
import { UjianComponent } from './ujian/ujian.component';
import { SenaraiComponent } from './senarai/senarai.component';
import { SemakanComponent } from './semakan/semakan.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DaftarComponent,
    TestComponent,
    RespondenComponent,
    KahwinComponent,
    AnakComponent,
    PenjagaComponent,
    TemujanjiComponent,
    BayaranComponent,
    KategoriComponent,
    UjianComponent,
    SenaraiComponent,
    SemakanComponent,
    FeedbackComponent,
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
    RouterModule.forChild(UserRoutes),
    RouterModule,
    CalendarModule
  ]
})
export class UserModule { }
