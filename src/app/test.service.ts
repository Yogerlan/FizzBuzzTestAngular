import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FizzBuzzCell {
  index: number,
  value: string,
}

export interface ValidationCell {
  index: number,
  result: boolean,
}

export function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
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
  private val: Array<ValidationCell> = [];

  constructor(private http: HttpClient) { }

  private fbTest(fizz = 3, buzz = 5, start = 1, end = 100): Array<FizzBuzzCell> {
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

  getFizzBuzz(): Array<FizzBuzzCell> {
    return this.fb;
  }

  solveTest(params: TestParams) {
    this.fb = this.fbTest(params.fizz, params.buzz, params.start, params.end);
  }

  async validateTest() {
    this.val = [];
    for (let i = 0; i <= 5; i++) {
      let params = (await this.http.get(
        `assets/validate/${i}.in.json`,
        {responseType: 'json'}
      ).toPromise()) as TestParams;
      let cellsData = this.fbTest(params.fizz, params.buzz, params.start, params.end);
      let valData = (await this.http.get(
        `assets/validate/${i}.out.json`,
        {responseType: 'json'}
      ).toPromise()) as Array<FizzBuzzCell>;
      if (cellsData.length != valData.length) {
        this.val.push({
          index: i,
          result: false,
        });
      } else {
        let valid = true;
        for (let c = 0; c < cellsData.length; c++) {
          if ((cellsData[c].index != valData[c].index) || (cellsData[c].value != valData[c].value)) {
            valid = false;
            break;
          }
        }
        this.val.push({
          index: i,
          result: valid,
        });
      }
    }
  }

  getValidations(): Array<ValidationCell> {
    return this.val;
  }

}
