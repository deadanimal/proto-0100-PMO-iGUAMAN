import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  navigatePage(path: String) {
    if (path == 'responden') {
      return this.router.navigate(['/user/responden']);
    }
  }

}



