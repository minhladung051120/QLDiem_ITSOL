import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';
import { getBangDiem } from '../../model/getBangDiem';
@Component({
  selector: 'app-daotao-qldiem',
  templateUrl: './daotao-qldiem.component.html',
  styleUrls: ['./daotao-qldiem.component.css'],
})
export class DaotaoQldiemComponent implements OnInit {
  bangdiems: getBangDiem[];
  page = 1;
  pageSize = 5;
  searchText;
  p : Number=1;
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bangDiem();
  }
  bangDiem() {
    this.servicesService.getBangDiem().subscribe((data: any[]) => {
      this.bangdiems = data;
    });
  }
}
