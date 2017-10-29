import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';
import {ChoicePage} from './choice-page';


export class WherePage extends PageContent implements ChoicePage {

  readonly name = 'where';

  constructor() {
    super([
      new Image(`where/home-birth`, 'Home birth'),
      new Image(`where/hospital-birth`, 'Hospital birth'),
      new Image(`where/midwife-led`, 'Midwife led unit'),
      new Image(`where/theater-birth`, 'Theater birth')
    ],
      'students',
    'Where do you want to give birth?');
  }
}
