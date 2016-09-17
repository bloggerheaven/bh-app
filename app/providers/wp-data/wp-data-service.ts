import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { WpDataMock } from './data/wp-data-mock';
import 'rxjs/add/operator/map';

/*
  Generated class for the WpData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WpDataService {
  constructor() {}

  getPosts(): Post[] {
    let posts = <Post[]> [];

    WpDataMock.getPost().forEach(function(post: any) {
      posts.push(new Post(post));
    });

    return posts;
  }

  getPost(id: number) {
  }
}

