import { Location, RouteConfig } from 'vue-router/types/router';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Image } from './attributes/image';

import './choice.scss';
import { ChoicePage } from './pages/choice-page';
import { Lookup } from './pages/lookup';

@Component({
  template: require('./choice.html')
})
export class ChoiceComponent extends Vue {
  dynamicClass: String = '12';
  lookup: Lookup = new Lookup();
  page: ChoicePage;
  skipText: string;

  private planValueBefore: number;
  private newPlanValue: number;
  private previousPage: string;
  private valueAlreadySelected: boolean;

  /**
   * Overridden lifecycle event only ran when component
   * has been created, as the route can't be accessed until then
   *
   * @memberof ChoiceComponent
   */
  created() {
    this.updatePageFromData();
  }

  @Watch('$route.path')
  pathChanged(route) {
    this.updatePageFromData();
  }


  updatePageFromData() {
    this.page = this.lookup[this.$route.params.pageName];
    const sections = 12 / this.page.imgRefs.length;
    this.dynamicClass = `col-xs-12 col-sm-${sections}`;
    this.planValueBefore = +this.$route.query.plan;
    this.newPlanValue = this.minusValueForThisChoice();
    this.valueAlreadySelected = !!this.$route.query.complete;
    this.skipText = this.valueAlreadySelected ? 'Remove Selection' : 'Skip to the next section';
  }

  /**
   * Get the next page to to go from here and update the
   * plan value with the value of whatever is chosen.
   *
   * @param {Image} image the image chosen.
   * @returns {Object} the
   * @memberof ChoiceComponent
   */
  getNextPage(image: Image): Object {
    return {
      path: this.valueAlreadySelected ? '/plan' : this.page.nextPage,
      query: {
        plan: (this.newPlanValue || 0) + (1 << image.position)
      }
    };
  }

  /**
   * Link for skiping this question.  For if you don't
   * want to select this one yet.
   *
   * @returns {object} object to pass to the router to navigate
   * @memberof ChoiceComponent
   */
  skip(): object {
    return {
      path: this.valueAlreadySelected ? '/plan' : this.page.nextPage,
      query: {
        plan: this.newPlanValue
      }
    };
  }

  /**
   * Used for marking a choice as selected (with the border)
   *
   * @param {Image} image
   * @returns {String}
   * @memberof ChoiceComponent
   */
  isSelected(image: Image): String {
    let className: string = 'img-responsive';
    if ((1 << image.position) & this.planValueBefore) {
      className += ' selected';
    }
    return className;
  }

  /**
   * For all of the choices on this page make sure the
   * bits of the passed in value are set to 0
   *
   * @returns {number} the value after setting bits to 0
   * @memberof ChoiceComponent
   */
  minusValueForThisChoice(): number {
    return this.page.imgRefs.reduce(
      (acc, image) => acc & ~(1 << image.position),
      this.planValueBefore);
  }


}
