import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/post';
import { Member } from '../../models/member';
import { WpDataService } from '../../providers/wp-data/wp-data-service';

@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [WpDataService]
})
export class SearchPage {
  posts: Post[];

  constructor(private navCtrl: NavController, private wpDataService: WpDataService) {
    this.posts = [];
    this.wpDataService = wpDataService;
  }

  searchPosts(event) {
    // Dummy search
    if (event.target.value.length > 0) {
      this.posts = this.wpDataService.getPosts();
    } else {
      this.posts = [];
    }
  }

  findMember(post): Member {
    return this.wpDataService.getFirstMemberBy('id', post.member);
  }
}
