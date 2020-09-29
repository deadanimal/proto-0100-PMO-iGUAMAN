import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responden',
  templateUrl: './responden.component.html',
  styleUrls: ['./responden.component.scss']
})
export class RespondenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  navigatePage(path: String) {
    if (path == 'kahwin') {
      return this.router.navigate(['/user/kahwin']);
    }
    else if (path == 'daftar-user'){
      return this.router.navigate(['/user/daftar'])
    }
  }

}