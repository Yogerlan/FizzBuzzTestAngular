import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

import { ValidationCell, TestService } from '../test.service';

@Component({
  selector: 'app-validate-modal',
  templateUrl: './validate-modal.component.html',
  styleUrls: ['./validate-modal.component.scss']
})
export class ValidateModalComponent implements OnInit {

  constructor(
    public modalRef: MdbModalRef<ValidateModalComponent>,
    private testService: TestService
  ) { }

  ngOnInit(): void {
  }

  getValidations(): Array<ValidationCell> {
    return this.testService.getValidations();
  }

}
