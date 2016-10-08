import {Component} from '@angular/core';
import {SocialSharing} from 'ionic-native';
import {NavController, NavParams} from 'ionic-angular';
import {Post} from '../../models/post';
import {Member} from '../../models/member';
import {WpDataService} from '../../providers/wp-data/wp-data-service';
import {MemberPage} from '../member/member';
import {SingleTrackService} from '../../services/single_track_service';

@Component({
  templateUrl: 'build/pages/single/single.html',
  providers: [WpDataService, SingleTrackService]
})

export class SinglePage {
  public post: Post;
  public member: Member;

  constructor(private navCtrl: NavController, private params: NavParams, private wpDataService: WpDataService,
              private trackService: SingleTrackService) {

    this.post = wpDataService.getFirstPostBy('id', this.params.get('postId'));
    this.member = this.wpDataService.getFirstMemberBy('id', this.post.member);
    this.trackService.specify(this.post);
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
    this.trackService.start();
  }

  onPageWillLeave() {
    this.trackService.end();
  }
}
