import {Component, Input, OnInit} from '@angular/core';
import {zoznamCviceni} from "../../models/cvicenie.model";

@Component({
  selector: 'app-cvicenia-zoznam',
  templateUrl: './cvicenia-zoznam.component.html',
  styleUrls: ['./cvicenia-zoznam.component.css']
})
export class CviceniaZoznamComponent implements OnInit {
  currentStepIndex = 0;

  constructor() {

  }

  @Input()
  cvicenie: zoznamCviceni[] = [];

  uloha = [
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: 'Vašou úlohou je vytvoriť pre automobilový bazár organizáciu áut dostupných na predaj. Pozor ale! Každá značka musí byť osobitne a zároveň každý model v nej. Bazár aktuálne ponúka jeden model od značky BMW s názvom M3 a dva modely od značky AUDI s názvami A3 a A4.',
      vysledok: 'mkdir -p BMW/M3 AUDI/A3 AUDI/A4'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: 'Nachádzate sa na hodine a Váš spolužiak potrebuje od Vás odkontrolovať správnosť príkladu s názvom PRIKLAD1.txt riešeného počas cvičenia. Akým spôsobom mu dáte prístup k Vašim príkladom / priečinkom alebo všeobecne všetkému? Postačí zadať všetky práva k správnemu riešeniu.',
      vysledok: 'chmod 777 PRIKLAD1'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: 'Ako sa dostanete čo najefektívnejšie k textovému súboru TEXTY.txt, keď sa daný súbor nachádza v priečinku DOKUMENTY, ktorý nájdete v používateľovi JMRKVICKA. ',
      vysledok: 'cd ~JMRKVICKA/DOKUMENTY/TEXTY'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: 'Ako nakopírujete čo najefektívnejšie obsah z textovému súboru TEXTY.txt, keď sa daný súbor nachádza v priečinku DOKUMENTY, ktorý nájdete v používateľovi JMRKVICKA. K Vám a zároveň s názvom TEXTYCOPY.txt.',
      vysledok: 'cp ~JMRKVICKA/DOKUMENTY/TEXTY ./TEXTYCOPY'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: 'Vo firme Vám dali úlohu zlúčiť 4 textové súbory s údajmi o zákazníkoch a ich objednávkach. Keďže daná firma robí daňové priznanie, tak potrebuje dané 4 štvrťroky zlúčiť na kompletizáciu informácií pre daňové priznanie. Akým najefektívnejším spôsobom dokážete dané súbory s názvami JESEN, ZIMA, JAR a LETO zlúčiť? Výsledný súbor sa má volať DATA.',
      vysledok: 'cat JESEN ZIMA JAR LETO > DATA'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: 'Vašou úlohou je z daného poľa, ktoré sa nachádza v súbore s názvom POLE vystrihnúť 1. a 3. stĺpec. Akým najefektívnejším spôsobom to zrealizujete?',
      vysledok: 'cut -f1,3 -d: POLE'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: 'Potrebujete urobiť príklad, ktorý Vám vypíše chybové hlásenia pri kopírovaní DVOCH súborov, mená daných súborov použijete ako argumenty pri spúšťaní, akým spôsobom by ste napísali podmienku pre takéto zadanie? Upozornenie, miesto chybových hlásení napíšte iba #.',
      vysledok: 'If cp $1 $2\n' +
        'Then echo #\n' +
        'Else echo #\n' +
        'Fi\n'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: '',
      vysledok: 'nic2'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: '',
      vysledok: 'nic2'
    },
    { input: 'Pokúste sa úlohu splniť čo najoptimalnejšou formou (optimálne riešenie je možné vytvoriť z jedného riadka")',
      content: '',
      vysledok: 'nic2'
    },
  ];


  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateStepIndicator();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.uloha.length - 1) {
      this.currentStepIndex++;
      this.updateStepIndicator();
    }
  }

  updateStepIndicator() {
    const stepIndicatorEls = document.querySelectorAll(".step-indicator");
    stepIndicatorEls.forEach((el, index) => {
      if (index === this.currentStepIndex) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  showElement = false

  showSolution(){
    this.showElement = !this.showElement;
  }

  ngOnInit(): void {
  }
}
