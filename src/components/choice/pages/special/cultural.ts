import { PageContent } from '../../attributes/page-content';
import { Image } from '../../attributes/image';
import {ChoicePage} from '../choice-page';


export class Cultural extends PageContent implements ChoicePage {

  constructor() {
    super([
      new Image(`special/cultural`, 'Special cultural requirement'),
    ],
    'special-medical',
    'Do you have any special cultural requirement?');
  }
}
