export interface ICategoryOptions {
  id?: number;
  count?: number;
  link?: string;
  name?: string;
  description?: string;
}

export class Category {
  id: number;
  count: number;
  link: string;
  name: string;
  description: string;

  constructor(options?: ICategoryOptions) {
    this.id = options.id;
    this.count = options.count;
    this.link = options.link;
    this.name = options.name;
    this.description = options.description;
  }
}
