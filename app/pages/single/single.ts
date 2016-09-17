import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post } from '../../models/post';
import { Member } from '../../models/member';
import { WpDataService } from '../../providers/wp-data/wp-data-service';
import { MemberPage } from '../member/member';

/*
  Generated class for the SinglePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/single/single.html',
  providers: [WpDataService]
})
export class SinglePage {
  public post: Post;
  public member: Member;

  constructor(private navCtrl: NavController, private params: NavParams, private wpDataService: WpDataService) {
    this.navCtrl = navCtrl;
    this.post = wpDataService.getFirstPostBy('id', this.params.get('postId'));
    this.member = this.wpDataService.getFirstMemberBy('id', this.post.member);
  }

  pushMemberPage(memberId) {
    this.navCtrl.push(MemberPage, {
      memberId: memberId
    });
  }

  popPage() {
    this.navCtrl.pop();
  }
}
