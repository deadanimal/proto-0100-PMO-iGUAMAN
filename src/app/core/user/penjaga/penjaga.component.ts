import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-penjaga',
  templateUrl: './penjaga.component.html',
  styleUrls: ['./penjaga.component.scss']
})
export class PenjagaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  navigatePage(path: String) {
    if (path == 'temujanji') {
      return this.router.navigate(['/user/temujanji']);
    }
    else if (path == 'bayaran') {
      return this.router.navigate (['/user/bayaran'])
    }
    else if (path == 'kategori') {
      return this.router.navigate(['/user/kategori'])
    }
    else if (path == 'anak') {
      return this.router.navigate(['/user/anak'])
    }
  }

}