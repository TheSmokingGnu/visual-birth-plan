import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class CtgMonitoring extends PageContent implements ChoicePage {
  constructor() {
    super(
      [
        new Image(
          `ctg-monitoring/ctg-monitoring-yes`,
          "I would like cardiotocography monitoring"
        ),
        new Image(
          `ctg-monitoring/ctg-monitoring-no`,
          "I would not like cardiotocography monitoring"
        )
      ],
      "pushing",
      "Do you want cardiotocography monitoring?"
    );
  }
}
