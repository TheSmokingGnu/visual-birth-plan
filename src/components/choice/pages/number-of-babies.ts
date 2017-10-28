import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class NumberOfBabiesPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`number-of-babies/first`, 14, 'First baby'),
      new Image(`number-of-babies/second`, 15, 'First baby'),
      new Image(`number-of-babies/third`, 16, 'First baby'),
      new Image(`number-of-babies/forth`, 17, 'First baby'),

    ],
    'examine',
    'How many babies have you previously had?');
  }
}
