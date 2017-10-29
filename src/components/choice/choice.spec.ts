import Component from 'vue-class-component';
import VueRouter from 'vue-router';
import Vue from 'vue';

import { Image } from './attributes/image';
import { expect } from 'chai';
import { ChoiceComponent } from './choice';
import { ComponentTest } from '../../util/component-test';
@Component({
  template: require('./choice.html')
})
class MockChoiceComponent extends ChoiceComponent {

  constructor() {
    super();
  }
  created() {
    super.created();
  }
}

describe('Choice component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;


  beforeEach(() => {
    Vue.use(VueRouter);


    directiveTest = new ComponentTest('<div><choice></choice></div>', { 'choice': MockChoiceComponent });
    router = new VueRouter({
      routes: [
        { path: '/choice/:pageName', component: MockChoiceComponent },
      ]
    });
    router.push('choice/feel');
  });

  it('should render on created', async () => {
    debugger;
    directiveTest.createComponent({ router: router });
    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('#title').textContent).to.equal('How are you feeling about the birth? ');
    });
  });
});
