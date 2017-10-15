import { expect } from 'chai';
import { HomeComponent } from './home';
import { ComponentTest } from '../../util/component-test';

describe('Home component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><home></home></div>', { 'home': HomeComponent });
  });

  it('should render correct package', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('h1').textContent).to.equal('Start using the visual birth plan');
    });
  });

  it('should render the correct text', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('h2').textContent).to.equal(`10 easy steps to create your birth plan ready for the hospital`);
    });
  });
});
