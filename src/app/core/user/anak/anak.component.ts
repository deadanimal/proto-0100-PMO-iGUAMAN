import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anak',
  templateUrl: './anak.component.html',
  styleUrls: ['./anak.component.scss']
})
export class AnakComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  navigatePage(path: String) {
    if (path == 'penjaga') {
      return this.router.navigate(['/user/penjaga']);
    }
    else if (path == 'kahwin') {
      return this.router.navigate(['/user/kahwin'])
    }
  }

}
