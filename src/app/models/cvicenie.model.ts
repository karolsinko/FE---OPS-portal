export class cvicenie{

  id?: number;
  content: string;
  input: string;
  solution: string;

  constructor(id: number, content: string, input: string, solution: string) {
    this.id = id;
    this.content = content;
    this.input = input;
    this.solution = solution;
  }
}

export class zoznamCviceni{

  id?: number;
  content: string;
  input: string;
  solution: string;

  constructor(cvicenie: zoznamCviceni) {
    this.id = cvicenie.id;
    this.content = cvicenie.content;
    this.input = cvicenie.input;
    this.solution = cvicenie.solution;
  }
}
