import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class CatchPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`catch/midwife`, 'Midwife catch\'s the baby'),
      new Image(`catch/dad`, 'Dad catch\'s the baby'),
      new Image(`catch/mum`, 'Mum catch\'s the baby'),
      new Image(`catch/you-choose`, 'Your choice catch the baby')
    ],
    'cut-cord',
    'Who would you like to catch the baby?');
  }
}
