import { Location, RouteConfig } from 'vue-router/types/router';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Image } from './attributes/image';
import { ChoicePage } from './pages/choice-page';
import { Lookup } from './pages/lookup';

import './choice.scss';

@Component({
  template: require('./choice.html')
})
/**
 * @class ChoiceComponent
 * @extends Vue
 * @description
 * Generic choice component
 */
export class ChoiceComponent extends Vue {
  // default to full row width for the image
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

  /**
   * To change the pictures on the page when the parameter
   * changes watch for a change in the path.
   */
  @Watch('$route.path')
  pathChanged() {
    this.updatePageFromData();
  }

  /**
   * Refresh the images on the page.
   */
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
    const newPage = this.pageMove();
    newPage.query.plan += 1 << image.position;
    return newPage;
  }

  /**
   * Link for skiping this question.  For if you don't
   * want to select this one yet.
   *
   * @returns {object} object to pass to the router to navigate
   * @memberof ChoiceComponent
   */
  skip(): object {
    return this.pageMove();
  }

  /**
   * Used for marking a choice as selected (with the border) See if the bit is set
   * at the position value of each image.
   *
   * @param {Image} image to check if it has been selected
   * @returns {String} either selected or just img-responsive
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
   * For all of the choices on this page set to 0
   *
   * @returns {number} the value after setting bits to 0
   * @memberof ChoiceComponent
   */
  minusValueForThisChoice(): number {
    return this.page.imgRefs.reduce(
      (acc, image) => acc & ~(1 << image.position),
      this.planValueBefore);
  }

  /**
   * Common logic to change the page
   */
  pageMove()  {
    return {
      path: this.valueAlreadySelected ? '/plan' : this.page.nextPage,
      query: {
        plan: this.newPlanValue || 0
      }
    };
  }


}
