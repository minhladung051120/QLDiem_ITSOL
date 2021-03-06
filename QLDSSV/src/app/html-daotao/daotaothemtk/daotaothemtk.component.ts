import { Component, OnInit } from '@angular/core';
import { taiKhoan } from '../../model/taiKhoan';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-daotaothemtk',
  templateUrl: './daotaothemtk.component.html',
  styleUrls: ['./daotaothemtk.component.css']
})
export class DaotaothemtkComponent implements OnInit {
  taikhoan: taiKhoan = new taiKhoan();
  constructor(private servicesService: ServicesService,
    private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    this.taikhoan.chucVu="DT";
    this.servicesService.createTaiKhoanDt(this.taikhoan).subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
    );
    this.taikhoan = new taiKhoan();
    // this.gotoList();
  }
  onSubmit() {
    this.save();
  }
  gotoList() {
    this.router.navigate(['/daotao/daotao-qlkyhoc']);
  }
}
