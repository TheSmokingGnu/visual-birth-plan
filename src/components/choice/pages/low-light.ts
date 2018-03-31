import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class LowLight extends PageContent implements ChoicePage {
  constructor() {
    super(
      [new Image(`low-light/low-light`, "Low light levels in the room")],
      "do-not-disturb",
      "Would you like dimmed / low level lighting in the room?"
    );
  }
}
