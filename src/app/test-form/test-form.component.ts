import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TestService } from '../test.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  testForm = new FormGroup({
    fizz: new FormControl(3),
    buzz: new FormControl(5),
    start: new FormControl(1),
    end: new FormControl(100),
  });

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.testService.solveTest(this.testForm.value);
  }

}
