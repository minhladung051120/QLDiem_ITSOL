import { Component, OnInit } from '@angular/core';
import { joinSinhVien } from '../../model/joinSinhVien';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-daotaothemsv',
  templateUrl: './daotaothemsv.component.html',
  styleUrls: ['./daotaothemsv.component.css'],
})
export class DaotaothemsvComponent implements OnInit {
  joinsinhvien: joinSinhVien = new joinSinhVien();
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  save() {
    this.servicesService.joinSinhVien(this.joinsinhvien).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.joinsinhvien = new joinSinhVien();
    this.gotoList();
  }
  onSubmit() {
    this.save();
  }
  gotoList() {
    this.router.navigate(['/daotao/danhsach-sv']);
  }
}
