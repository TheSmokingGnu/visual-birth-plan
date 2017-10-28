import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class CatchPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`catch/midwife`, 21, 'Midwife catch\'s the baby'),
      new Image(`catch/dad`, 22, 'Dad catch\'s the baby'),
      new Image(`catch/mum`, 23, 'Mum catch\'s the baby'),
      new Image(`catch/you-choose`, 24, 'Your choice catch the baby')
    ],
    'cut-cord',
    'Who would you like to catch the baby?');
  }
}
