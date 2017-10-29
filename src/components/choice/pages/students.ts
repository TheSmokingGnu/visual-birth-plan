import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class StudentPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`students/ok`, 'Students OK'),
      new Image(`students/not-ok`,  'Students not OK')
    ],
    'type-of-birth',
    'Do you mind medical students present?');
  }
}
