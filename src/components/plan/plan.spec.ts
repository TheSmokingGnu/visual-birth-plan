import Component from 'vue-class-component';
import { expect } from 'chai';
import { ComponentTest } from '../../util/component-test';
import { PlanComponent } from './plan';

describe('Plan component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><plan></plan></div>', {plan: PlanComponent});
  });

  it('should render correct package', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('div').textContent).to.equal('\n    This is the plan\n');
    });
  });
});
