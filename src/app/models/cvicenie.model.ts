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

export class zoznamCviceni{

  id?: number;
  content: string;
  input: string;

  constructor(cvicenie: zoznamCviceni) {
    this.id = cvicenie.id;
    this.content = cvicenie.content;
    this.input = cvicenie.input;
  }
}
