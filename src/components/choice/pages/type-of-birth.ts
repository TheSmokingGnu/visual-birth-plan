import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class TypeOfBirthPage extends PageContent implements ChoicePage {
  constructor() {
    super(
      [
        new Image(`type-of-birth/natural`, "Natural birth"),
        new Image(`type-of-birth/medical-management`, "Medical management"),
        new Image(`type-of-birth/caesarean`, "Caesarean"),
        new Image(`type-of-birth/water-birth`, "Water birth")
      ],
      "help",
      "What type of birth would you prefer?"
    );
  }
}
