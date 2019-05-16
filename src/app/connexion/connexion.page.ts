import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  username;
  password;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  goTo(page){
    this.router.navigateByUrl(page);
  }

  connexion(){
    //Temp connexion
    if(this.username == "test" && this.password == "test")
    {
      this.router.navigateByUrl('mes-infos')
    }
  }

}
