import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class ExaminationsPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`examine/negotiate`, 'Negotiate examinations'),
      new Image(`examine/on-request`, 'Examinations on request'),
      new Image(`examine/routine`, 'Routine examinations')
    ],
    'catch',
    'How would you like your cervical examinations?');
  }
}
