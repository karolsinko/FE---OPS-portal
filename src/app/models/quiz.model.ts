export class quiz {

  id?: number;
  solution: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;


  constructor(id: number, solution: string, question: string, option1: string, option2: string, option3: string, option4: string) {
    this.id = id;
    this.solution = solution;
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
  }
}

export class zoznamQuizovLinux {

  id?: number;
  solution: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;

  constructor(quizov: zoznamQuizovLinux) {
    this.id = quizov.id;
    this.solution = quizov.solution;
    this.question = quizov.question;
    this.option1 = quizov.option1;
    this.option2 = quizov.option2;
    this.option3 = quizov.option3;
    this.option4 = quizov.option4;
  }
}

export class zoznamQuizovC {

  id?: number;
  solution: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;

  constructor(quizov: zoznamQuizovC) {
    this.id = quizov.id;
    this.solution = quizov.solution;
    this.question = quizov.question;
    this.option1 = quizov.option1;
    this.option2 = quizov.option2;
    this.option3 = quizov.option3;
    this.option4 = quizov.option4;
  }
}

export class zoznamQuizovBash {

  id?: number;
  solution: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;

  constructor(quizov: zoznamQuizovBash) {
    this.id = quizov.id;
    this.solution = quizov.solution;
    this.question = quizov.question;
    this.option1 = quizov.option1;
    this.option2 = quizov.option2;
    this.option3 = quizov.option3;
    this.option4 = quizov.option4;
  }
}
