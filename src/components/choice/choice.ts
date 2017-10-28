import { Location } from 'vue-router/types/router';
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

  constructor() {
    super();
  }


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
  pathChanged() {
    this.updatePageFromData();

  }

  updatePageFromData() {
    this.page = this.lookup[this.$route.params.pageName];
    const sections = 12 / this.page.imgRefs.length;
    this.dynamicClass = `col-xs-12 col-sm-${sections}`;
  }

  /**
   * Get the next page to to go from here and amend with the
   *
   * @param {Image} image the image chosen.
   * @returns {Object} the
   * @memberof ChoiceComponent
   */
  getNextPage(image: Image): Object {
    return {
      path: this.page.nextPage,
      query: {
        plan: (+this.$route.query.plan || 0) + (1 << image.position)
      }
    };
  }


}
