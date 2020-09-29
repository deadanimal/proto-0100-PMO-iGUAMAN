import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ujian',
  templateUrl: './ujian.component.html',
  styleUrls: ['./ujian.component.scss']
})
export class UjianComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: String) {
    if (path == 'kategori') {
      return this.router.navigate(['/user/kategori']);
    }
    else if (path == 'bayaran') {
      return this.router.navigate(['/user/bayaran'])
    }
  }

}
