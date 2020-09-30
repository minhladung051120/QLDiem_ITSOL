import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://localhost:8080/';
  constructor(
    private http: HttpClient
  ) { }
  getTaiKhoanSv(){
    return this.http.get(this.baseUrl+"getTaiKhoanSv");
  }

  getTaiKhoanGv(){
    return this.http.get(this.baseUrl+"getTaiKhoanGv");
  }

  getTaiKhoanDt(){
    return this.http.get(this.baseUrl+"getTaiKhoanDt");
  }

  getTaiKhoan(){
    return this.http.get(this.baseUrl+"getTaiKhoan");
  }

  getKyHoc(){
    return this.http.get(this.baseUrl+"getKyHoc");
  }

  getKyHocId(maKy : number):Observable<any>{
    return this.http.get(this.baseUrl+"getKyHoc/"+maKy);
  }

  getMonHoc(){
    return this.http.get(this.baseUrl+"getMonHoc");
  }

  getBangDiem(){
    return this.http.get(this.baseUrl+"getBangDiem");
  }

  getLopHoc(){
    return this.http.get(this.baseUrl+"getLopHoc");
  }

  getSinhVien(){
    return this.http.get(this.baseUrl+"getSinhVien");
  }

  createKyHoc(kyHoc: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"kyHoc",kyHoc);
  }

  createMonHoc(monHoc: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"monHoc",monHoc);
  }

  createLopHoc(lopHoc: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"lopHoc",lopHoc);
  }

  joinSinhVien(joinSinhVien: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"joinSinhVien",joinSinhVien);
  }

  deleteKyHoc(maKy : number):Observable<any>{
    return this.http.delete(this.baseUrl+"kyHoc/"+maKy);
  }

  deleteMonHoc(monHoc : number):Observable<any>{
    return this.http.delete(this.baseUrl+"monHoc/"+monHoc);
  }

  deleteLopHoc(lopHoc : number):Observable<any>{
    return this.http.delete(this.baseUrl+"lopHoc/"+lopHoc);
  }

  updateKyHoc(kyHoc: Object): Observable<Object>{
    return this.http.put(this.baseUrl+"updateKyHoc",kyHoc);

  }
}
