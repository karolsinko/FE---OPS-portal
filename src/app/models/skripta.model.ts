export class skripta{

  id?: number;
  content: string;
  content1: string;

  constructor(id: number, content: string, content1: string) {
    this.id = id;
    this.content = content;
    this.content1 = content1;
  }
}

export class zoznamSkript{

  id?: number;
  content: string;
  content1: string;

  constructor(skripta: zoznamSkript) {
    this.id = skripta.id;
    this.content = skripta.content;
    this.content1 = skripta.content1;
  }
}
