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
    return allSections.reduce((acc, value, index, array) => {
      if (index < Math.floor(array.length / 2)) {
        acc[0].push(value);
      }
      else  {
        acc[1].push(value);
      }

      return acc;
    }, [new Array<Image>(), new Array<Image>(), new Array<Image>()]);
  }

  getRowClass(section: Array<Image>) {
    return `col-xs-12 col-sm-${Math.round(12 / section.length)}`;
  }

  getImgRefPageLink(image: Image) {
    return `choice/${image.pageName}?plan=${this.$route.query.plan}&complete=true`;
  }
}

