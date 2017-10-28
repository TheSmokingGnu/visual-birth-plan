import { StudentPage } from './students';
import { FeelPage } from './feel';
import { WherePage } from './where';
import {TypeOfBirthPage} from './type-of-birth';
import {HelpPage} from './help';
import {NumberOfBabiesPage} from './number-of-babies';
import {ExaminationsPage} from './examinations';
import {CatchPage} from './catch';
import {CutCordPage} from './cut-cord';



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

}
