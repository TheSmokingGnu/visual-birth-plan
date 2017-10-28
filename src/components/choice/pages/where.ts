import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class WherePage extends PageContent implements ChoicePage {

  readonly name = 'where';

  constructor() {
    super([
      new Image(`where/home-birth`, 5, 'Home birth'),
      new Image(`where/hospital-birth`, 6, 'Hospital birth'),
      new Image(`where/midwife-led`, 7, 'Midwife led unit'),
      new Image(`where/theater-birth`, 8, 'Theater birth')
    ],
      'students',
    'Where do you want to give birth?');
  }
}
