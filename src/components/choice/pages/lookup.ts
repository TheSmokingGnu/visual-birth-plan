import { Quiet } from "./quiet";
import { Interpreter } from "./interpreter";
import { Cultural } from "./special/cultural";
import { SpecialMedical } from "./special/medical";
import { SpecialSpiritual } from "./special/spiritual";

import { ChoicePage } from "./choice-page";
import { Image } from "../attributes/image";
import { StudentPage } from "./students";
import { FeelPage } from "./feel";
import { WherePage } from "./where";
import { TypeOfBirthPage } from "./type-of-birth";
import { HelpPage } from "./help";
import { NumberOfBabiesPage } from "./number-of-babies";
import { ExaminationsPage } from "./examinations";
import { CatchPage } from "./catch";
import { CutCordPage } from "./cut-cord";
import { Permission } from "./permission";
import { LowLight } from "./low-light";
import { DoNotDisturb } from "./do-not-disturb";
import { DoNotSay } from "./do-not-say";
import { CtgMonitoring } from "./ctg-monitoring";
import { Pushing } from "./pushing";
import { BreakWaters } from "./break";
import { FoetalScalpElectrode } from "./foetal-scalp-electrode";

export class Lookup {
  feel: FeelPage = new FeelPage();
  where: WherePage = new WherePage();
  students: StudentPage = new StudentPage();
  "type-of-birth": TypeOfBirthPage = new TypeOfBirthPage();
  help: HelpPage = new HelpPage();
  "number-of-babies": NumberOfBabiesPage = new NumberOfBabiesPage();
  examine: ExaminationsPage = new ExaminationsPage();
  catch: CatchPage = new CatchPage();
  "cut-cord": CutCordPage = new CutCordPage();
  cultural: Cultural = new Cultural();
  "special-medical": SpecialMedical = new SpecialMedical();
  "special-spiritual": SpecialSpiritual = new SpecialSpiritual();
  interpreter: Interpreter = new Interpreter();
  "quiet-please": Quiet = new Quiet();
  permission: Permission = new Permission();
  "low-light": LowLight = new LowLight();
  "do-not-disturb": DoNotDisturb = new DoNotDisturb();
  "do-not-say": DoNotSay = new DoNotSay();
  "ctg-monitoring": CtgMonitoring = new CtgMonitoring();
  pushing: Pushing = new Pushing();
  "break-waters": BreakWaters = new BreakWaters();
  "foetal-scalp-electrode": FoetalScalpElectrode = new FoetalScalpElectrode();

  constructor() {
    let position = 0;
    for (let page in this) {
      if (this.hasOwnProperty(page)) {
        const element = this[page];
        element.imgRefs.map(value => {
          value.position = position;
          position++;
          return value;
        });
      }
    }
  }
}
