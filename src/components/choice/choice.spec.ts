import { expect } from 'chai';
import { ChoiceComponent } from './choice';
import { ComponentTest } from '../../util/component-test';

describe('Choice component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><choice></choice></div>', { 'choice': ChoiceComponent });
  });

  it('should render correct package', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('div').textContent).to.equal('How are you feeling about the birth?   ');
    });
  });

  it('should render an image', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      expect(!!vm.$el.querySelector('img')).to.be.true;
    });
  });
});
