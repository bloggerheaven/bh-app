import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {BHApp} from './app.component';
import {FeedPage} from '../pages/feed/feed';
import {MemberPage} from '../pages/member/member';
import {MembersPage} from '../pages/members/members';
import {SearchPage} from '../pages/search/search';
import {SinglePage} from '../pages/single/single';
import {TabsPage} from '../pages/tabs/tabs';
import {WpDataService} from '../providers/wp-data/wp-data-service';

@NgModule({
  declarations: [
    BHApp,
    FeedPage,
    MemberPage,
    MembersPage,
    SearchPage,
    SinglePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(BHApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BHApp,
    FeedPage,
    MemberPage,
    MembersPage,
    SearchPage,
    SinglePage,
    TabsPage
  ],
  providers: [
    WpDataService
  ]
})
export class AppModule {
}
