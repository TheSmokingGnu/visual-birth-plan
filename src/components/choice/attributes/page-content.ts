import {Image} from './image';

export class PageContent {
  imgRefs: Array<Image>;
  nextPage: String;
  title: String;

  /**
   * Creates an instance of PageContent.
   * @param {Array<String>} imgRefs all the image refs for this page
   * @param {String} nextPage page after this one
   * @memberof PageContent
   */
  constructor(imgRefs: Array<Image>, nextPage: String, title: String) {
    this.imgRefs = imgRefs;
    this.nextPage = nextPage;
    this.title = title;
  }

}
