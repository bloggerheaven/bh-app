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

  constructor(options?: IMemberOptions) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.link = options.link;
    this.blogUrl = options.url;
    this.profileImg = this.mockImgs(options.id);
  }

  private mockImgs(id: number) {
    return 'img/members/' + id + '.jpg';
  }
}
