import { Quiet } from './quiet';
import { Interpreter } from './interpreter';
import { Cultural } from './special/cultural';
import { SpecialMedical } from './special/medical';
import { SpecialSpiritual } from './special/spiritual';

import { ChoicePage } from './choice-page';
import { Image } from '../attributes/image';
import { StudentPage } from './students';
import { FeelPage } from './feel';
import { WherePage } from './where';
import { TypeOfBirthPage } from './type-of-birth';
import { HelpPage } from './help';
import { NumberOfBabiesPage } from './number-of-babies';
import { ExaminationsPage } from './examinations';
import { CatchPage } from './catch';
import { CutCordPage } from './cut-cord';



export class Lookup {
  feel: FeelPage = new FeelPage();
  where: WherePage = new WherePage();
  students: StudentPage = new StudentPage();
  'type-of-birth': TypeOfBirthPage = new TypeOfBirthPage();
  help: HelpPage = new HelpPage();
  'number-of-babies': NumberOfBabiesPage = new NumberOfBabiesPage();
  examine: ExaminationsPage = new ExaminationsPage();
  catch: CatchPage = new CatchPage();
  'cut-cord': CutCordPage = new CutCordPage();
  cultural: Cultural = new Cultural();
  'special-medical': SpecialMedical = new SpecialMedical();
  'special-spiritual': SpecialSpiritual = new SpecialSpiritual();
  interpreter: Interpreter = new Interpreter();
  quiet: Quiet = new Quiet();

  constructor() {
    let position = 0;
    for (let page in this) {
      if (this.hasOwnProperty(page)) {
        const element: ChoicePage = this[page];
        element.imgRefs.map(value =>  {
          value.position = position;
          position++;
          return value;
        });
      }
    }
  }

  getCorrectImage(page: ChoicePage, pageValue: number): Image {
    return page.imgRefs.filter(value => (1 << value.position) & pageValue).pop();
  }

}
