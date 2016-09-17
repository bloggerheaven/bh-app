import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { Member } from '../../models/member';
import { Tag } from '../../models/tag';
import { Category } from '../../models/category';
import { WpDataMock } from './data/wp-data-mock';
import 'rxjs/add/operator/map';

/*

  REFACTOR, it's not dry!!!!!!!!!!

  Generated class for the WpData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WpDataService {
  constructor() {}

  /* Post */

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

  /* Member */

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

  /* Tag */

  getTags(): Tag[] {
    let tags = <Tag[]> [];

    WpDataMock.getTags().forEach(function(tag: any) {
      tags.push(new Tag(tag));
    });

    return tags;
  }

  getTagsBy(key: string, value: any): Tag[] {
    return this.getTags().filter(function(tag: Tag) { return tag[key] === value; });
  }

  getFirstTagBy(key: string, value: any): Tag {
    return this.getTagsBy(key, value)[0];
  }

  /* Category */

  getCategories(): Category[] {
    let categories = <Category[]> [];

    WpDataMock.getCategories().forEach(function(category: any) {
      categories.push(new Category(category));
    });

    return categories;
  }

  getCategoriesBy(key: string, value: any): Category[] {
    return this.getCategories().filter(function(category: Category) { return category[key] === value; });
  }

  getFirstCategoryBy(key: string, value: any): Category {
    return this.getCategoriesBy(key, value)[0];
  }
}

