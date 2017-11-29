import {Image} from './image';
import {ChoicePage} from '../pages/choice-page';

/**
 * @class PageContent
 * @description
 * Generic Choice component page.
 */
export class PageContent implements ChoicePage {
  imgRefs: Array<Image>;
  nextPage: String;
  title: String;

  /**
   * Creates an instance of PageContent.
   * @param {Array<String>} imgRefs all the image refs for this page
   * @param {String} nextPage page after this one
   * @param {String} title title of the page
   * @memberof PageContent
   */
  constructor(imgRefs: Array<Image>, nextPage: String, title: String) {
    this.imgRefs = imgRefs;
    this.nextPage = nextPage;
    this.title = title;
  }

}
