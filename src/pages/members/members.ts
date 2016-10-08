import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WpDataService } from '../../providers/wp-data/wp-data-service';
import { MemberPage } from '../member/member';
import { Member } from '../../models/member';

/*
  Generated class for the MembersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'members.html',
})
export class MembersPage {
  public members: Member[];

  constructor(private navCtrl: NavController, private wpDataService: WpDataService) {
    this.members = wpDataService.getMembers();
  }

  pushMemberPage(memberId) {
    this.navCtrl.push(MemberPage, {
      memberId: memberId
    });
  }

}
