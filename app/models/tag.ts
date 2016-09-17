export interface ITagOptions {
  id?: number;
  count?: number;
  link?: string;
  name?: string;
  description?: string;
}

export class Tag {
  id: number;
  count: number;
  link: string;
  name: string;
  description: string;

  constructor(options?: ITagOptions) {
    this.id = options.id;
    this.count = options.count;
    this.link = options.link;
    this.name = options.name;
    this.description = options.description;
  }
}
