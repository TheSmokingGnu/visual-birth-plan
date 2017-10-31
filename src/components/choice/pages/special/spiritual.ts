import { PageContent } from '../../attributes/page-content';
import { Image } from '../../attributes/image';


export class SpecialSpiritual extends PageContent {

  constructor() {
    super([
      new Image(`special/cultural`, 'Special cultural requirement'),
    ],
    'interpreter',
    'Do you have any special cultural requirement?');
  }
}
