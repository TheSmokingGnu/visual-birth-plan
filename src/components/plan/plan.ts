import { lookup } from 'dns';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Lookup } from '../choice/pages/lookup';
import { Image } from '../choice/attributes/image';
import './plan.scss';


@Component({
  template: require('./plan.html')
})
export class PlanComponent extends Vue {
  lookup: Lookup = new Lookup();
  brokenUpSections: Array<Image[]>;
  feelSection: Image;
  noPlan: boolean;

  created(): void {
    const allSections = [];
    const planValue: number = +this.$route.query.plan;
    for (let page in this.lookup) {
      if (this.lookup.hasOwnProperty(page)) {
        const section = this.lookup.getCorrectImage(this.lookup[page], planValue);
        if (section) {
          section.pageName = page;
          allSections.push(section);
        }
      }
    }

    this.noPlan = allSections.length === 0;

    this.brokenUpSections = this.splitIntoThreeRows(allSections);
  }

  splitIntoThreeRows(allSections: Array<Image>): Array<Image[]> {
    let devisor =1;
    devisor = allSections.length <= 12 ? 2 : 3;
    let evenLength = Math.floor(allSections.length / 2);
    const threeRows = allSections.reduce((acc, value, index, array) => {
      if (index < 6 && index < evenLength) {
        acc[0].push(value);
      }
      else if (index < 12 && index < evenLength * 2) {
        acc[1].push(value);
      } else {
        acc[2].push(value);
      }

      return acc;
    }, [new Array<Image>(), new Array<Image>(), new Array<Image>()]);

    const lengthOfFirst = threeRows[0].length;

    return threeRows.map(value => {
      if (value.length > 0) {
        while (value.length !== lengthOfFirst) {
          value.push(new Image('blank', 'blank'));
        }
      }
      return value;
    });
  }

  getRowClass(section: Array<Image>) {
    return `col-xs-12 col-sm-${Math.round(12 / section.length)}`;
  }

  getImgRefPageLink(image: Image) {
    return `choice/${image.pageName}?plan=${this.$route.query.plan}&complete=true`;
  }
}

