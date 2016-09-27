import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WpDataService } from '../../providers/wp-data/wp-data-service';
import { Member } from '../../models/member';

/*
  Generated class for the MemberPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/member/member.html',
  providers: [WpDataService]
})
export class MemberPage {
  public member: Member;

  constructor(private navCtrl: NavController, private params: NavParams, private wpDataService: WpDataService) {
    this.member = wpDataService.getFirstMemberBy('id', this.params.get('memberId'));
  }

  popPage() {
    this.navCtrl.pop();
  }
}
