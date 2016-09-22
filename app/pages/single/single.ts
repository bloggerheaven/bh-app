import {Component} from '@angular/core';
import {SocialSharing} from 'ionic-native';
import {NavController, NavParams} from 'ionic-angular';
import {Post} from '../../models/post';
import {Member} from '../../models/member';
import {WpDataService} from '../../providers/wp-data/wp-data-service';
import {MemberPage} from '../member/member';
import {Duration} from "../../models/duration";

@Component({
  templateUrl: 'build/pages/single/single.html',
  providers: [WpDataService]
})
export class SinglePage {
  public post: Post;
  public member: Member;
  private duration: Duration;

  constructor(private navCtrl: NavController, private params: NavParams, private wpDataService: WpDataService) {
    this.navCtrl = navCtrl;
    this.post = wpDataService.getFirstPostBy('id', this.params.get('postId'));
    this.member = this.wpDataService.getFirstMemberBy('id', this.post.member);
    this.duration = new Duration;
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

  onPageDidEnter() {
    this.duration.start();
  }

  onPageWillLeave() {
    this.duration.end();
    console.log('Viewed post: ' + this.post.id + ' for: ' + this.duration.milliseconds() + ' ms');
  }
}
