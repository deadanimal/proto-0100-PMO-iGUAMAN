import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-feedback2',
  templateUrl: './feedback2.component.html',
  styleUrls: ['./feedback2.component.scss']
})
export class Feedback2Component implements OnInit {

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  rate = 5;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    
  }

}
