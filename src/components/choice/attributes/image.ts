/**
 * @class Image
 * @description
 * Stores all information about the image.
 */
export class Image {
  ref: String;
  position: number;
  altText: String;
  pageName: String;

  /**
   * Creates an instance of Image.
   * @param {String} ref location of image
   * @param {String} altText alternate text for the image
   * @memberof Image
   */
  constructor(ref: String, altText: String) {
    this.ref = `assets/img/choice/${ref}.png`;
    this.altText = altText;
  }

  isSelected(plan: number): boolean {
    return !!((1 << this.position) & plan);
  }
}
