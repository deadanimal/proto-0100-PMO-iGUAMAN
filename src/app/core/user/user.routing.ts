import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DaftarComponent } from './daftar/daftar.component';
import { TestComponent } from './test/test.component';
import { RespondenComponent } from './responden/responden.component';
import { KahwinComponent } from './kahwin/kahwin.component';
import { AnakComponent } from './anak/anak.component';
import { PenjagaComponent } from './penjaga/penjaga.component';
import { TemujanjiComponent } from './temujanji/temujanji.component';
import { BayaranComponent } from './bayaran/bayaran.component';
import { KategoriComponent } from './kategori/kategori.component';
import { UjianComponent } from './ujian/ujian.component';
import { SenaraiComponent } from './senarai/senarai.component';
import { SemakanComponent } from './semakan/semakan.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'daftar',
                component: DaftarComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'test',
                component: TestComponent
            },
            {
                path: 'responden',
                component: RespondenComponent
            },
            {
                path: 'kahwin',
                component: KahwinComponent
            },
            {
                path: 'anak',
                component: AnakComponent
            },
            {
                path: 'penjaga',
                component: PenjagaComponent
            },
            {
                path: 'temujanji',
                component: TemujanjiComponent
            },
            {
                path: 'bayaran',
                component: BayaranComponent
            },
            {
                path: 'kategori',
                component: KategoriComponent
            },
            {
                path: 'ujian',
                component: UjianComponent
            },
            {
                path: 'senarai',
                component: SenaraiComponent
            },
            {
                path: 'semakan',
                component: SemakanComponent
            },
            {
                path: 'feedback',
                component: FeedbackComponent
            }
        ]
    }
]