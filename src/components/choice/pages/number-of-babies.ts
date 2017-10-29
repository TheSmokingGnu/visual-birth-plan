import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class NumberOfBabiesPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`number-of-babies/first`, 'First baby'),
      new Image(`number-of-babies/second`, 'First baby'),
      new Image(`number-of-babies/third`, 'First baby'),
      new Image(`number-of-babies/forth`, 'First baby'),

    ],
    'examine',
    'How many babies have you previously had?');
  }
}
