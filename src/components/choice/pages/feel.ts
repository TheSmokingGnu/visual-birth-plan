import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class FeelPage extends PageContent implements ChoicePage {
  constructor() {
    super([
      new Image(`feel/excited`, 1, 'feeling excited'),
      new Image(`feel/confident`, 2, 'feeling confident'),
      new Image(`feel/anxious`, 3, 'feeling anxious'),
      new Image(`feel/scared`, 4, 'feeling scared')
    ],
      'where',
    'How are you feeling about the birth?');
  }
}
