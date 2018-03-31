import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class DoNotDisturb extends PageContent implements ChoicePage {
  constructor() {
    super(
      [
        new Image(
          `do-not-disturb/do-not-disturb`,
          "Do not disturb me during labour"
        )
      ],
      "do-not-say",
      "Is it important that your not disturbed during labour?"
    );
  }
}
