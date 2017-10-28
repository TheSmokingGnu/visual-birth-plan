import { expect } from 'chai';
import { HomeComponent } from './home';
import { ComponentTest } from '../../util/component-test';
import Vue from 'vue';
import VueRouter from 'vue-router';

describe('Home component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;

  beforeEach(() => {
    Vue.use(VueRouter);
    directiveTest = new ComponentTest('<div><home></home></div>', { 'home': HomeComponent });
    let choiceComponent = { template: '<div class="choice">Choice</div>' };

    router = new VueRouter({
      routes: [
        { path: '/choice', component: choiceComponent },
      ]
    });
  });

  it('should render correct package', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('h1').textContent).to.equal('visual birth plan');
    });
  });

  it('should render the correct text', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('h2').textContent).to.equal(`A pictoral representation of your plan to give birth.`);
    });
  });

  describe('when clicking the start button', async () => {
    beforeEach( async () => {
      directiveTest.createComponent({router: router});
      await directiveTest.execute((vm) => {
        let button = <HTMLButtonElement>vm.$el.querySelector('button.btn');
        button.click();
      });
    });

    it('should have text on the button', async () => {
      await directiveTest.execute((vm) => {
        debugger;
        expect(vm.$el.querySelector('button').textContent).to.equal('Start creating a birth plan');
      });
    });
  });
});
