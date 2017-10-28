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
  allSections: Image[] = [];
  feelSection: Image;

  created(): void {
    const planValue: number = +this.$route.query.plan;
    for (let page in this.lookup) {
      if (this.lookup.hasOwnProperty(page)) {
        const section = this.lookup.getCorrectImage(this.lookup[page], planValue);
        if (section) {
          this.allSections.push(section);
        }

      }
    }
    console.log(this.allSections);
  }
}
