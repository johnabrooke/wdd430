export class Document {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public url: string,
    public children?: Document[]
  ) {
    // this.id = id;
    // this.name = name;
    // this.description = description;
    // this.url = url;
    // this.children = children;
  }
}
