import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kahwin',
  templateUrl: './kahwin.component.html',
  styleUrls: ['./kahwin.component.scss']
})
export class KahwinComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  navigatePage(path: String) {
    if (path == 'anak') {
      return this.router.navigate(['/user/anak']);
    }
    else if (path == 'responden') {
      return this.router.navigate(['/user/responden'])
    }
  }

}