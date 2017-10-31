import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class CutCordPage extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`cut-cord/midwife`, 'Midwife cut the cord'),
      new Image(`cut-cord/dad`, 'Dad cut the cord'),
      new Image(`cut-cord/mum`, 'Mum cut the cord'),
      new Image(`cut-cord/you-choose`, 'Your choice cut the cord')
    ],
    'cultural',
    'Who would you like to cut the babies cord?');
  }
}
