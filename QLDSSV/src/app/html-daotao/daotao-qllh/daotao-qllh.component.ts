import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';
import { getLopHoc } from '../../model/getLopHoc';
@Component({
  selector: 'app-daotao-qllh',
  templateUrl: './daotao-qllh.component.html',
  styleUrls: ['./daotao-qllh.component.css'],
})
export class DaotaoQllhComponent implements OnInit {
  lophocs: getLopHoc[];
  page = 1;
  pageSize = 5;
  searchText;
  p : Number=1;
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lopHoc();
  }
  lopHoc() {
    this.servicesService.getLopHoc().subscribe((data: any[]) => {
      this.lophocs = data;
    });
  }
  clickMethod(name: string) {
    if(confirm("Bạn chắc chắn muốn xóa? "+name)) {
        this.deleteLopHoc(name);
    }
  }
  deleteLopHoc(maLop) {
    this.servicesService.deleteLopHoc(maLop).subscribe(response =>
     {this.lophocs = this.lophocs.filter(lophoc => lophoc.maLop != maLop);
 })
}
}
