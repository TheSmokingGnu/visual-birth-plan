import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class CutCordPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`cut-cord/midwife`, 25, 'Midwife cut the cord'),
      new Image(`cut-cord/dad`, 26, 'Dad cut the cord'),
      new Image(`cut-cord/mum`, 27, 'Mum cut the cord'),
      new Image(`cut-cord/you-choose`, 28, 'Your choice cut the cord')
    ],
    'cut-cord',
    'Who would you like to catch the baby?');
  }
}
