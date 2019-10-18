import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
 
  public appPages = [
    {
      title: 'Inicio',
      url: '/tabs/tab1',
      icon: 'home'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
