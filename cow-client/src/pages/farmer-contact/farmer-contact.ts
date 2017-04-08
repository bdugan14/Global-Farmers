import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the FarmerContact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-farmer-contact',
  templateUrl: 'farmer-contact.html',
})
export class FarmerContact {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmerContact');
  }

  sendMessage(message: HTMLInputElement) {
    console.log('sending message: ', message)
    let toast = this.toastCtrl.create({
      message: `Message "${message.value}" was sent successfully`,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    message.value = '';
  }

}
