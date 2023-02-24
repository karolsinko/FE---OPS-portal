export class skripta {

  id?: number;
  content: string;
  content1: string;
  commands: string;
  explain: string;

  constructor(id: number, content: string, content1: string, commands: string, explain: string) {
    this.id = id;
    this.content = content;
    this.content1 = content1;
    this.commands = commands;
    this.explain = explain;
  }
}

export class zoznamSkriptLinux {

  id?: number;
  content: string;
  content1: string;
  commands: string;
  explain: string;

  constructor(skripta: zoznamSkriptLinux) {
    this.id = skripta.id;
    this.content = skripta.content;
    this.content1 = skripta.content1;
    this.commands = skripta.commands;
    this.explain = skripta.explain;
  }
}

export class zoznamSkriptBash {

  id?: number;
  content: string;
  content1: string;
  commands: string;
  explain: string;

  constructor(skripta: zoznamSkriptBash) {
    this.id = skripta.id;
    this.content = skripta.content;
    this.content1 = skripta.content1;
    this.commands = skripta.commands;
    this.explain = skripta.explain;
  }
}

export class zoznamSkriptC {

  id?: number;
  content: string;
  content1: string;
  commands: string;
  explain: string;

  constructor(skripta: zoznamSkriptC) {
    this.id = skripta.id;
    this.content = skripta.content;
    this.content1 = skripta.content1;
    this.commands = skripta.commands;
    this.explain = skripta.explain;
  }
}
