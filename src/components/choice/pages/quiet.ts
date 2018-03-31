import { PageContent } from "../attributes/page-content";
import { Image } from "../attributes/image";

export class Quiet extends PageContent {
  constructor() {
    super(
      [new Image(`quiet/quiet-please`, "Quiet room")],
      "permission",
      "Do you want a quiet room with minimal chatting between staff?"
    );
  }
}
