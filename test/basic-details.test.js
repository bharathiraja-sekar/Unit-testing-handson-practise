import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html`<basic-details></basic-details>`);
describe('Basic details', () => {
  it('Check for id', async() => {
    const el = await fixture('<div id = "word"></div>');
    expect(el.id).to.equal('word');
});

it('Checking for web accessebility', () => {
  expect(el).to.be.exist;
});

it('Check for amount', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.amount).to.be.equal(10000);
});

it('Check the type for amount', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.amount).to.be.a('number');
});

it('Checking for element', async () => {
    const el = await fixture(html`<lion-input .value="text"></lion-input>`);
    expect(el.getAttribute(".value")).to.be.equal("text");
});

it('Checking for emiCalc', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.emiCalc).to.be.equal(0);
});
it('Checking captureDetails when clicked', async () => {
  setTimeout(async () => {
      const el = await fixture(html`<basic-details></basic-details>`);
      const spy = sinon.spy(el._captureDetails);
      el.requestUpdate();
      await el.updateComplete;
      el.shadowRoot.getElementById('lion-btn').click();
      expect(spy.called).to.be.true;
  }, 2000);
});

it('Checking toDashBoard when clicked', async () => {
  const el = await fixture(html`<basic-details></basic-details>`);
  const myFunctionStub = Sinon.stub(el, '_toDashboard');
  el.requestUpdate();
  await el.updateComplete;
  el.shadowRoot.querySelector('lion-button').click();
  expect(myFunctionStub).to.have.callCount(1);
});
});
