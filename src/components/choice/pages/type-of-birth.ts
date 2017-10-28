import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class TypeOfBirthPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`type-of-birth/natural`, 9, 'Natural birth'),
      new Image(`type-of-birth/medical-management`, 10, 'Medical management'),
      new Image(`type-of-birth/caesarean`, 11, 'Caesarean')
    ],
    'help',
    'What type of birth would you prefer?');
  }
}
