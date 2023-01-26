export class cvicenie{

  id?: number;
  content: string;
  input: string;

  constructor(id: number, content: string, input: string) {
    this.id = id;
    this.content = content;
    this.input = input;
  }
}

export class zoznamUloh{

  id?: number;
  content: string;
  input: string;

  constructor(uloha: zoznamUloh) {
    this.id = uloha.id;
    this.content = uloha.content;
    this.input = uloha.input;
  }
}
