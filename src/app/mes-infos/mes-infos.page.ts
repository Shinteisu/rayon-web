import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-infos',
  templateUrl: './mes-infos.page.html',
  styleUrls: ['./mes-infos.page.scss'],
})
export class MesInfosPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  goTo(page){
    this.router.navigateByUrl(page);
  }

}
