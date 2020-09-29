import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: String) {
    if (path == 'penjaga') {
      return this.router.navigate(['/user/penjaga']);
    }
    else if (path == 'ujian') {
      return this.router.navigate(['/user/ujian'])
    }
  }

  orders = [
    { id: 100, name: 'Kategori Syariah' },
    { id: 200, name: 'Kategori Sivil' },
    { id: 300, name: 'Kategori Jenayah' },
    { id: 400, name: 'Pendamping Guaman'}
  ]

  onChecked(order) {
    order.checked = !order.checked;
  }

}
