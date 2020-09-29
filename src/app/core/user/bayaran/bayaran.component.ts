import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bayaran',
  templateUrl: './bayaran.component.html',
  styleUrls: ['./bayaran.component.scss']
})
export class BayaranComponent implements OnInit {

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService,
    private router : Router,
  ) { }

  ngOnInit() {
  }

  navigatePage(path: String) {
    if (path == 'temujanji') {
      return this.router.navigate(['/user/temujanji']);
    }
    else if (path == 'login') {
      return this.router.navigate(['/auth/login']);
    }
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

  confirmSwal(){
    swal.fire({
        title: 'Adakah anda pasti?',
        text: "Anda tidak dapat kembali kepada asal!",
        type: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes',
        cancelButtonClass: 'btn btn-secondary'
    }).then((result) => {
        if (result.value) {
            // Show confirmation
            swal.fire({
                title: 'Batal!',
                text: 'Temujanji anda telah dibatalkan.',
                type: 'success',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-primary'
            });
        }
    })
  }
    viewData(){

      swal.fire({
          title: 'Meneruskan bayaran?',
          text: 'RM10.00',
          showCancelButton: true,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Ya',
          cancelButtonClass: 'btn btn-secondary'
      }).then((result) => {
          if (result.value) {
              // Show confirmation
              swal.fire({
                  title: 'Berjaya!',
                  text: 'Bayaran anda telah berjaya.',
                  type: 'success',
                  buttonsStyling: false,
                  confirmButtonClass: 'btn btn-primary',
                  confirmButtonText: 'Tempah', 
              });
          }
      })
  }

}
