import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";
import { ChoicePage } from "./choice-page";

export class Permission extends PageContent implements ChoicePage {
  constructor() {
    super(
      [new Image(`permission/permission`, "Ask for permission?")],
      "low-light",
      "Do you want the medical staff to ask you explicitly about every decision?"
    );
  }
}
