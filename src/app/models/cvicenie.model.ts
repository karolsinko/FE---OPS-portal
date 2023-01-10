export class cvicenie{

  id?: number;
  uloha: string;

  constructor(id: number, uloha: string) {
    this.id = id;
    this.uloha = uloha;
  }
}

export class zoznamUloh{

  id?: number;
  uloha: string;

  constructor(uloha: zoznamUloh) {
    this.id = uloha.id;
    this.uloha = uloha.uloha;
  }

}
