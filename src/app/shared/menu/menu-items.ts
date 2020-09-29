export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-black'
  },
  {
    path: '/admin/khidmat',
    title: 'Khidmat Nasihat',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-dark',
    collapse: 'khidmat',
    isCollapsed: true,
    children: [
      { path: 'agihan', title: 'Semakan', type: 'link' },
      { path: 'pegawai', title: 'Agihan', type: 'link'}
    ]
  },
  {
    path: '/admin/appointment',
    title: 'Temujanji',
    type: 'link',
    icontype: 'fas fa-braille text-dark'
  },
  {
    path: '/admin/report',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
  {
    path: '/admin/feedback2',
    title: 'Maklum Balas',
    type: 'link',
    icontype: 'fas fa-sliders-h text-dark'
  },
  {
    path: '/admin/management',
    title: 'Sistem',
    type: 'sub',
    icontype: 'fas fa-cog text-dark',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-dark'
  },
  {
    path: '/user',
    title: 'Pendaftaran',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-dark',
    collapse: 'pendaftaran',
    isCollapsed: true,
    children: [
      { path: 'daftar', title: 'Daftar', type: 'link' },
      { path: 'semakan', title: 'Semakan', type: 'link' }
    ]
  },
  {
    path: '/user/temujanji',
    title: 'Temujanji',
    type: 'link',
    icontype: 'fas fa-braille text-dark'
  },
  {
    path: '/user/feedback',
    title: 'Maklum Balas',
    type: 'link',
    icontype: 'fas fa-sliders-h text-dark'
  }/*,
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  },
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];