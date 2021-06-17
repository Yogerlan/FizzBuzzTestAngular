import { Injectable } from '@angular/core';

export interface FizzBuzzCell {
  index: number,
  value: string,
}

interface TestParams {
  fizz: number,
  buzz: number,
  start: number,
  end: number,
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private fb: Array<FizzBuzzCell> = [];

  constructor() { }

  private fbTest(fizz: number, buzz: number, start: number, end: number): Array<FizzBuzzCell> {
    let result: Array<FizzBuzzCell> = [];
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        let fbCell = (i % fizz == 0) || (i % buzz == 0)
          ? (i % fizz == 0 ? 'Fizz' : '') +  (i % buzz == 0 ? 'Buzz' : '')
          : i.toString();
        result.push({
          index: i,
          value: fbCell,
        });
      }
    } else {
      for (let i = start; i >= end; i--) {
        let fbCell = (i % fizz == 0) || (i % buzz == 0)
          ? (i % fizz == 0 ? 'Fizz' : '') +  (i % buzz == 0 ? 'Buzz' : '')
          : i.toString();
        result.push({
          index: i,
          value: fbCell,
        });
      }
    }
    return result;
  }

  solveTest(params: TestParams) {
    this.fb = this.fbTest(params.fizz, params.buzz, params.start, params.end);
  }

  getFizzBuzz(): Array<FizzBuzzCell> {
    return this.fb;
  }
}
