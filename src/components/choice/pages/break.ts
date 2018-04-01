import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class BreakWaters extends PageContent implements ChoicePage {
  constructor() {
    super(
      [new Image(`break-waters/do-not-break`, "Do not break my waters")],
      "foetal-scalp-electrode",
      "If needed would you allow your waters to be broken?"
    );
  }
}
