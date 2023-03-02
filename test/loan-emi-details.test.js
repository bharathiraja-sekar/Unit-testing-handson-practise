import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';


const el = await fixture(html`<loanemi-details></loanemi-details>`);
const button = el.shadowRoot.querySelectorAll('button');

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('Accessible', async () => {
    expect(el).to.be.accessible();
});

it('check for the h2 heading', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EMI Details');
});
});
