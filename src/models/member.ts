export interface IMemberOptions {
  id?: number;
  name?: string;
  description?: string;
  link?: string;
  url?: string;
}

export class Member {
  id: number;
  name: string;
  description: string;
  link: string;
  blogUrl: string;
  profileImg: string;
  backgroundImg: string;

  constructor(options?: IMemberOptions) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.link = options.link;
    this.blogUrl = options.url;
    this.profileImg = this.mockImgs(options.id);
    this.backgroundImg = this.mockBgImgs(options.id);
  }

  private mockImgs(id: number) {
    return 'assets/img/members/' + id + '.jpg';
  }

  private mockBgImgs(id: number) {
    return 'assets/img/members/bg' + id + '.jpg';
  }
}
