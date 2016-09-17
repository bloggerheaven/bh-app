import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { Member } from '../../models/member';
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

    WpDataMock.getPosts().forEach(function(post: any) {
      posts.push(new Post(post));
    });

    return posts;
  }

  getPostsBy(key: string, value: any): Post[] {
    return this.getPosts().filter(function(post: Post) { return post[key] === value; });
  }

  getFirstPostBy(key: string, value: any): Post {
    return this.getPostsBy(key, value)[0];
  }

  getMembers(): Member[] {
    let members = <Member[]> [];

    WpDataMock.getMembers().forEach(function(member: any) {
      members.push(new Member(member));
    });

    return members;
  }

  getMembersBy(key: string, value: any): Member[] {
    return this.getMembers().filter(function(member: Member) { return member[key] === value; });
  }

  getFirstMemberBy(key: string, value: any): Member {
    return this.getMembersBy(key, value)[0];
  }
}

