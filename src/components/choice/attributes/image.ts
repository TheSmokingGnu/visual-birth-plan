export class Image {
  ref: String;
  position: number;
  altText: String;

  /**
   * Creates an instance of Image.
   * @param {String} ref location of image
   * @param {number} position bitwise position
   * @memberof Image
   */
  constructor(ref: String, position: number, altText: String) {
    this.ref = `assets/img/choice/${ref}.png`;
    this.position = position;
    this.altText = altText;
  }
}
