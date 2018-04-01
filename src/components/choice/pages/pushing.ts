import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class Pushing extends PageContent implements ChoicePage {
  constructor() {
    super(
      [
        new Image(
          `pushing/pushing-yes`,
          "I would like help guiding my pushing"
        ),
        new Image(
          `pushing/pushing-no`,
          "I would not like cardiotocography monitoring"
        )
      ],
      "break-waters",
      "Do you want help and guidance while pushing?"
    );
  }
}
