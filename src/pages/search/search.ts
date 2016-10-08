import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Post} from '../../models/post';
import {Member} from '../../models/member';
import {WpDataService} from '../../providers/wp-data/wp-data-service';
import {SinglePage} from '../single/single';
import {MemberPage} from '../member/member';

@Component({
  templateUrl: 'search.html',
})
export class SearchPage {
  posts: Post[];

  constructor(private navCtrl: NavController, private wpDataService: WpDataService) {
    this.posts = [];
  }

  searchPosts(event) {
    // Dummy search
    if (event.target.value.length > 0) {
      this.posts = this.wpDataService.getPosts().splice(0, 5).sort(function () {
        return .5 - Math.random();
      });
    } else {
      this.posts = [];
    }
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
