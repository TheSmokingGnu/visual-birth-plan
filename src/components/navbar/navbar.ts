import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Link } from './link';
import { Logger } from '../../util/log';

@Component({
  template: require('./navbar.html')
})
export class NavbarComponent extends Vue {

  protected logger: Logger;

  inverted: boolean = true; // default value

  object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

  links: Link[] = [
    new Link('Home', '/'),
    new Link('Plan', '/plan')
  ];

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
  }

  /**
   * Add plan query string if available
   *
   *
   * @param {Link} link
   * @returns
   * @memberof NavbarComponent
   */
  getPath(link: Link) {
    let path: string = link.path;
    const plan = this.$route.query.plan;
    if (plan) {
      path += '?plan=' + plan;
    }
    return path;
  }

  /**
   * Open the print dialog
   *
   * @memberof NavbarComponent
   */
  print() {
    window.print();
  }
}
