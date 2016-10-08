import {Component} from '@angular/core';
import {SocialSharing} from 'ionic-native';
import {NavController, NavParams} from 'ionic-angular';
import {Post} from '../../models/post';
import {Member} from '../../models/member';
import {WpDataService} from '../../providers/wp-data/wp-data-service';
import {MemberPage} from '../member/member';

@Component({
  templateUrl: 'single.html',
})

export class SinglePage {
  public post: Post;
  public member: Member;

  constructor(private navCtrl: NavController, private params: NavParams, private wpDataService: WpDataService) {

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

  share(post: Post) {
    SocialSharing.share(null, null, null, post.link);
  }
}
