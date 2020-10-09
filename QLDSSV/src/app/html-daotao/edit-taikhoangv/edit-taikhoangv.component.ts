import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { taiKhoanDb } from '../../model/taiKhoanDb';
@Component({
  selector: 'app-edit-taikhoangv',
  templateUrl: './edit-taikhoangv.component.html',
  styleUrls: ['./edit-taikhoangv.component.css']
})
export class EditTaikhoangvComponent implements OnInit {
  taikhoandb: taiKhoanDb;
  constructor(
    private servicesService: ServicesService,
    private activate: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTaiKhoanId();
  }

  getTaiKhoanId() {
    this.activate.params.subscribe((param) => {
      this.servicesService.getTaiKhoanGvId(param.id).subscribe((data) => {
        console.log(data);
        this.taikhoandb = data;
      });
    });
  }

  save() {
    this.servicesService.updateTaiKhoan(this.taikhoandb).subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
    );
    // this.taikhoan = new taiKhoan();
    // this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/daotao/daotao-qlkyhoc']);
  }
}
