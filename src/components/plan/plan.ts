import { lookup } from "dns";
import Vue from "vue";
import Component from "vue-class-component";
import { Lookup } from "../choice/pages/lookup";
import { Image } from "../choice/attributes/image";
import "./plan.scss";

@Component({
  template: require("./plan.html")
})
/**
 * Sort the selected images into rows to fit onto an A4
 * piece of paper
 *
 * @class PlanComponent
 */
export class PlanComponent extends Vue {
  lookup: Lookup = new Lookup();
  brokenUpSections: Array<Image[]>;
  feelSection: Image;
  noPlan: boolean;

  /**
   * On creation go through each image and check if
   * it should be displayed based on the plan number.
   */
  created(): void {
    const planValue: number = +this.$route.query.plan;
    const allSections = this.getAllSelectedSections(this.lookup, planValue);
    this.noPlan = allSections.length === 0;
    this.brokenUpSections = this.splitIntoThreeRows(allSections);
  }

  /**
   * Get all of the choices that have been made.
   *
   * @param lookup All pages and links to those pages.
   * @param planValue numeric value of the plan
   */
  getAllSelectedSections(lookup: Lookup, planValue: number) {
    const allSections = [];
    for (let page in this.lookup) {
      if (this.lookup.hasOwnProperty(page)) {
        const section = this.lookup[page].imgRefs
          .filter(value => value.isSelected(planValue))
          .pop();
        if (section) {
          section.pageName = page;
          allSections.push(section);
        }
      }
    }

    return allSections;
  }

  /**
   * Split the images into up to three rows and make sure they
   * are spaced evenly.
   *
   * @param allSections all selected choices
   */
  splitIntoThreeRows(allSections: Array<Image>): Array<Image[]> {
    let devisor = 1;

    if (allSections.length <= 12) {
      devisor = 2;
    } else if (allSections.length <= 18) {
      devisor = 3;
    } else {
      devisor = 4;
    }

    let evenLength = Math.ceil(allSections.length / 2);
    const threeRows = allSections.reduce(
      (acc, value, index, array) => {
        if (index < 6 && index < evenLength) {
          acc[0].push(value);
        } else if (index < 12 && index <= evenLength * 2) {
          acc[1].push(value);
        } else if (index < 18 && index <= evenLength * 3) {
          acc[2].push(value);
        } else {
          acc[3].push(value);
        }

        return acc;
      },
      [
        new Array<Image>(),
        new Array<Image>(),
        new Array<Image>(),
        new Array<Image>()
      ]
    );

    const lengthOfFirst = threeRows[0].length;

    return threeRows.map(value => {
      if (value.length > 0) {
        while (value.length !== lengthOfFirst) {
          value.push(new Image("blank", "blank"));
        }
      }
      return value;
    });
  }

  /**
   * Size and space the images depending on how many of the
   * images there are.
   * @param section answer to one of the questions.
   */
  getRowClass(section: Array<Image>) {
    return `col-xs-12 col-sm-${Math.round(12 / section.length)}`;
  }

  /**
   * Get the link to the particular choice page so it can be
   * altered if needed.
   * @param image all image information
   */
  getImgRefPageLink(image: Image) {
    return `choice/${image.pageName}?plan=${this.$route.query
      .plan}&complete=true`;
  }
}
