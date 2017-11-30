import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { CalendarPage } from '../calendar/calendar';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
    user = {} as User;
  
    constructor(private afAuth: AngularFireAuth,
      public navCtrl: NavController, public navParams: NavParams) {
    }
   
    login() { 
      this.navCtrl.push('CalendarPage');
    }

    register() {
      this.navCtrl.push('RegisterPage');
  }

}
