import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post } from '../../models/post';
import { WpDataService } from '../../providers/wp-data/wp-data-service';
import { FeedPage } from '../feed/feed';

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

  constructor(private navCtrl: NavController, private params: NavParams, private wpDataService: WpDataService) {
    this.navCtrl = navCtrl;
    this.post = wpDataService.getFirstPostBy('id', this.params.get('postId'));
  }

  popFeedPage() {
    this.navCtrl.pop(FeedPage);
  }
}
