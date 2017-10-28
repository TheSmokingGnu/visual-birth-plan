import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class HelpPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`help/hands-off`, 12, 'Support is hand\'s off'),
      new Image(`help/hands-on`, 13, 'Support is hand\'s on'),
    ],
    'number-of-babies',
    'What kind of support would you prefer?');
  }
}
