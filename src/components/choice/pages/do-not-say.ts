import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class DoNotSay extends PageContent implements ChoicePage {
  constructor() {
    super(
      [new Image(`do-not-say/do-not-say`, "Do not say during labour")],
      "/plan",
      "Are there any words that you would like to be avoided?"
    );
  }
}
