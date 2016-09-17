export interface IPostOptions {
  id?: number;
  date?: Date;
  link?: string;
  title?: { rendered: string };
  content?: { rendered: string };
  author?: number;
  categories?: number[];
  tags?: number[];
}

export class Post {
  id: number;
  date: Date;
  link: string;
  title: string;
  content: string;
  member: number;
  categories: number[];
  tags: number[];
  featuredImg: string;

  constructor(options?: IPostOptions) {
    this.id = options.id;
    this.date = options.date;
    this.link = options.link;
    this.title = options.title.rendered;
    this.content = options.content.rendered;
    this.member = options.author;
    this.categories = options.categories;
    this.tags = options.tags;
    this.featuredImg = this.mockFeaturedImgs(options.id);
  }

  private mockFeaturedImgs(id: number) {
    return 'img/posts/' + id + '.jpg';
  }
}
