import {App, FixBug} from '../src/components';
import { render, fireEvent } from '@testing-library/react';

it('hello react', ()=>{
    let el = render(FixBug());
    let innerEl = el.getByTestId("test-div");
    expect(innerEl.textContent).toBe('qwertyu');
    //expect(innerEl.clientWidth).toBe(100);
});

it('fire react', ()=>{
  let el = render(FixBug());
  let outEl = el.getByTestId("test-out");
  expect(outEl.textContent).toBe('0');

  let btn = el.getByTestId("test-btn");
  fireEvent.click(btn);
  expect(outEl.textContent).toBe('1');
  fireEvent.click(btn);
  expect(outEl.textContent).toBe('2');
  //expect(innerEl.clientWidth).toBe(100);
});

it('fire react effect', ()=>{
  let el = render(FixBug());
  let outEl = el.getByTestId("test-out");
  expect(outEl.textContent).toBe('0');
  //expect(innerEl.clientWidth).toBe(100);
});
