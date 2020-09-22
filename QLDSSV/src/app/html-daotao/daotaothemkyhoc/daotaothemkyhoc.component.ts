import { Component, OnInit } from '@angular/core';
import { kyHoc } from '../../model/kyHoc';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-daotaothemkyhoc',
  templateUrl: './daotaothemkyhoc.component.html',
  styleUrls: ['./daotaothemkyhoc.component.css'],
})
export class DaotaothemkyhocComponent implements OnInit {
  kyhoc: kyHoc = new kyHoc();
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  save() {
    this.servicesService.createKyHoc(this.kyhoc).subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
    );
    this.kyhoc = new kyHoc();
    this.gotoList();
  }
  onSubmit() {
    this.save();
  }
  gotoList() {
    this.router.navigate(['/daotao/daotao-qlkyhoc']);
  }
}
