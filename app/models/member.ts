export interface IMemberOptions {
  id?: number;
  name?: string;
  description?: string;
  link?: string;
  url?: string;
  avatar_urls?: { '96': string };
}

export class Member {
  id: number;
  name: string;
  description: string;
  link: string;
  blogUrl: string;
  avatarUrl: string;

  constructor(options?: IMemberOptions) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.link = options.link;
    this.blogUrl = options.url;
    this.avatarUrl = options.avatar_urls['96'];
  }
}
