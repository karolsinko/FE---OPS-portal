export class cvicenie{

  id?: number;
  content: string;
  input: string;
  solution: string;
  language: string;

  constructor(id: number, content: string, input: string, solution: string, language: string) {
    this.id = id;
    this.content = content;
    this.input = input;
    this.solution = solution;
    this.language = language;
  }
}

export class zoznamCviceni{

  id?: number;
  content: string;
  input: string;
  solution: string;
  language: string;

  constructor(cvicenie: zoznamCviceni) {
    this.id = cvicenie.id;
    this.content = cvicenie.content;
    this.input = cvicenie.input;
    this.solution = cvicenie.solution;
    this.language = cvicenie.language;
  }
}
