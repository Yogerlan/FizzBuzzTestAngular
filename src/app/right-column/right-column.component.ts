import { Component, OnInit } from '@angular/core';

import { FizzBuzzCell, TestService } from '../test.service';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  getFizzBuzz(): Array<FizzBuzzCell> {
    return this.testService.getFizzBuzz();
  }

}
