import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/post';
import { WpData } from '../../providers/wp-data/wp-data';

/*
  Generated class for the FeedPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/feed/feed.html',
  providers: [WpData]
})
export class FeedPage {
  public posts: Post[];

  constructor(private navCtrl: NavController, private wpData: WpData) {
    this.posts = wpData.getPosts();
  }
}
