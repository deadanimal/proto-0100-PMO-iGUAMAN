import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { KhidmatComponent } from './khidmat/khidmat.component';
import { AgihanComponent } from './agihan/agihan.component';
import { FeedbackComponent } from '../user/feedback/feedback.component';
import { Feedback2Component } from './feedback2/feedback2.component';
import { AgihPegawaiComponent } from './agih-pegawai/agih-pegawai.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'khidmat',
                children: [
                    {
                        path: 'agihan',
                        component: AgihanComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    },
                    {
                        path: 'pegawai',
                        component: AgihPegawaiComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'feedback2',
                component: Feedback2Component,
            },
            {
                path: 'appointment',
                component: AppointmentComponent
            }
        ]
    }
]