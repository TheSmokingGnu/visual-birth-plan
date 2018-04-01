import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class FoetalScalpElectrode extends PageContent implements ChoicePage {
  constructor() {
    super(
      [
        new Image(
          `scalp-electrode/no-scalp-electrode`,
          "No foetal scalp electrode"
        )
      ],
      "/plan",
      "If needed would you allow a foetal scalp electrode to be used?"
    );
  }
}
