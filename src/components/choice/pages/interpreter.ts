import { PageContent } from '../attributes/page-content';
import { Image } from '../attributes/image';


export class Interpreter extends PageContent {

  constructor() {
    super([
      new Image(`interpreter/interpreter-required`, 'Interpreter is required'),
    ],
    'quiet-please',
    'Do you need an interpreter for the birth?');
  }
}
