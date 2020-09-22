import { Component, OnInit } from '@angular/core';
import { monHoc } from '../../model/monHoc';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-daotaothemmonhoc',
  templateUrl: './daotaothemmonhoc.component.html',
  styleUrls: ['./daotaothemmonhoc.component.css']
})
export class DaotaothemmonhocComponent implements OnInit {
  monhoc: monHoc = new monHoc();
  constructor(private servicesService: ServicesService,
    private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    this.servicesService.createMonHoc(this.monhoc).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.monhoc = new monHoc();
    this.gotoList();
  }
  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/daotao/daotao-qlmh']);
  }
}
