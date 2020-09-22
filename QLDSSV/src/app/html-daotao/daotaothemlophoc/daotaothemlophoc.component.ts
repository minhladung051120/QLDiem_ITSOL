import { Component, OnInit } from '@angular/core';
import { lopHoc } from '../../model/lopHoc';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-daotaothemlophoc',
  templateUrl: './daotaothemlophoc.component.html',
  styleUrls: ['./daotaothemlophoc.component.css'],
})
export class DaotaothemlophocComponent implements OnInit {
  lophoc: lopHoc = new lopHoc();
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  save() {
    this.servicesService.createLopHoc(this.lophoc).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.lophoc = new lopHoc();
    this.gotoList();
  }
  onSubmit() {
    this.save();
  }
  gotoList() {
    this.router.navigate(['/daotao/daotao-qllh']);
  }
}
