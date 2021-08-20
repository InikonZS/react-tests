//const { test, expect, describe } = require("@jest/globals");

const {solveLinear, someLogic, asyncLogic, domCreate} = require('../src/index1.js');

import { afterEach, beforeEach } from '@jest/globals';
import {func1} from '../src/esmodul';

console.log('fdgfsd');

beforeEach(() => {
  //console.log('before each it');
});

afterEach(() => {
  //console.log('after each it');
});

test('Should return 0 if c = 0', ()=>{
  expect(solveLinear(1, 0)).toBeCloseTo(0);
});


test('Should return -1', ()=>{
  expect(solveLinear(1, 1)).toBe(-1);
});


describe ('testing some logic', ()=>{

  test('Should reverse', ()=>{
  expect(someLogic('123456')).toBe('654321');
  });

  test('Should mot reverse', ()=>{
    expect(someLogic('1234')).toBe('1234');
  });
});

describe ('testing async logic', ()=>{
  test('Should return 123', (done)=>{
    asyncLogic((res)=>{
      expect(res).toBe(123);
      done();
    });
  });
});

test('Should work', ()=>{
  expect(func1(3)).toBe(12*3);
});

test('Should work with dom', ()=>{
  let el = domCreate();
  expect(el).toBeInstanceOf(HTMLButtonElement);
  expect(el.textContent).toBe('12345');
});



