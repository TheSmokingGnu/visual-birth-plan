import Component from 'vue-class-component';
import { expect } from 'chai';
import { ComponentTest } from '../../util/component-test';
import { PlanComponent } from './plan';

import VueRouter from 'vue-router';

describe('Plan component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><plan></plan></div>', {plan: PlanComponent});

    router = new VueRouter();
    router.push('/plan?plan=2');
  });

  it('should render correct package', async () => {
    directiveTest.createComponent({router: router});
    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('.a4').textContent).to.equal('');
    });
  });

  it('should pass through plan parameter', async () => {
    directiveTest.createComponent({router: router});
    await directiveTest.execute((vm) => {
      expect(vm.$route.query.plan).to.equal('2');
    });
  });

  it('should set the feel section to excited', async () => {
    directiveTest.createComponent({router: router});
    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('img').alt).to.equal('feeling excited');
    });
  });
});
