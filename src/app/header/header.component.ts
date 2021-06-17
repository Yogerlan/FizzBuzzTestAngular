import { Component, OnInit } from '@angular/core';

import { ValidateModalComponent } from '../validate-modal/validate-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { TestService } from '../test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef: MdbModalRef<ValidateModalComponent> | undefined;

  constructor(
    private modalService: MdbModalService,
    private testService: TestService
  ) { }

  ngOnInit(): void {
  }

  onValidate() {
    this.modalRef = this.modalService.open(ValidateModalComponent);
    this.testService.validateTest();
  }

}
