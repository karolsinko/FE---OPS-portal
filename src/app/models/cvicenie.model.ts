export class cvicenie {

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

export class zoznamCviceni {

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

export class zoznamCviceniLinux {

  id?: number;
  content: string;
  input: string;
  solution: string;

  constructor(cvicenie: zoznamCviceniLinux) {
    this.id = cvicenie.id;
    this.content = cvicenie.content;
    this.input = cvicenie.input;
    this.solution = cvicenie.solution;
  }
}

export class zoznamCviceniBash {

  id?: number;
  content: string;
  input: string;
  solution: string;

  constructor(cvicenie: zoznamCviceniBash) {
    this.id = cvicenie.id;
    this.content = cvicenie.content;
    this.input = cvicenie.input;
    this.solution = cvicenie.solution;
  }
}

export class zoznamCviceniC {

  id?: number;
  content: string;
  input: string;
  solution: string;

  constructor(cvicenie: zoznamCviceniC) {
    this.id = cvicenie.id;
    this.content = cvicenie.content;
    this.input = cvicenie.input;
    this.solution = cvicenie.solution;
  }
}
