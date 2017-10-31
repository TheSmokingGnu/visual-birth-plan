import { PageContent } from '../../attributes/page-content';
import { Image } from '../../attributes/image';


export class SpecialMedical extends PageContent {

  constructor() {
    super([
      new Image(`special/medical`, 'Special medical requirement'),
    ],
    'special-spiritual',
    'Do you have any special medical requirement?');
  }
}
