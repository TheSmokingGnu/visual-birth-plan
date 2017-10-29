import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class FeelPage extends PageContent implements ChoicePage {
  constructor() {
    super([
      new Image(`feel/excited`, 'feeling excited'),
      new Image(`feel/confident`, 'feeling confident'),
      new Image(`feel/anxious`, 'feeling anxious'),
      new Image(`feel/scared`, 'feeling scared')
    ],
      'where',
    'How are you feeling about the birth?');
  }
}
