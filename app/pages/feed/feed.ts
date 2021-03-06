import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/post';
import { Member } from '../../models/member';
import { WpDataService } from '../../providers/wp-data/wp-data-service';
import { SinglePage } from '../single/single';
import { MemberPage } from '../member/member';

/*
  Generated class for the FeedPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/feed/feed.html',
  providers: [WpDataService]
})
export class FeedPage {
  public posts: Post[];

  constructor(private navCtrl: NavController, private wpDataService: WpDataService) {
    this.posts = this.wpDataService.getPosts();
  }

  findMember(post): Member {
    return this.wpDataService.getFirstMemberBy('id', post.member);
  }

  pushSinglePage(postId) {
    this.navCtrl.push(SinglePage, {
      postId: postId
    });
  }

  pushMemberPage(memberId) {
    this.navCtrl.push(MemberPage, {
      memberId: memberId
    });
  }
}
