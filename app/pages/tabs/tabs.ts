import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { MembersPage } from '../members/members';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public feedRoot: any;
  public searchRoot: any;
  public membersRoot: any;

  constructor() {
    this.feedRoot = FeedPage;
    this.searchRoot = SearchPage;
    this.membersRoot = MembersPage;
  }
}
