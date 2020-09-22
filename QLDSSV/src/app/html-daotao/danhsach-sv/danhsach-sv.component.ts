import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';
import { getSinhVien } from '../../model/getSinhVien';
@Component({
  selector: 'app-danhsach-sv',
  templateUrl: './danhsach-sv.component.html',
  styleUrls: ['./danhsach-sv.component.css'],
})
export class DanhsachSVComponent implements OnInit {
  sinhviens: getSinhVien[];
  page = 1 ;
  pageSize = 5;
  searchText;
  p : Number=1;
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sinhVien();
  }
  sinhVien() {
    this.servicesService.getSinhVien().subscribe((data: any[]) => {
      this.sinhviens = data;
    });
  }
  
  
}
