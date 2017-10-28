import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class ExaminationsPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`examine/negotiate`, 18, 'Negotiate examinations'),
      new Image(`examine/on-request`, 19, 'Examinations on request'),
      new Image(`examine/routine`, 20, 'Routine examinations')
    ],
    'catch',
    'How would you like your cervical examinations?');
  }
}
