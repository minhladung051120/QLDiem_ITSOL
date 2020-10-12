import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://localhost:8080/';
  private sinhVienUrl = 'http://localhost:8080/api/sinhvien';
  private giangVienUrl = 'http://localhost:8080/api/giangvien';
  private daoTaoUrl = 'http://localhost:8080/api/daotao';
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

  getTaiKhoanId(maTk : number):Observable<any>{
    return this.http.get(this.baseUrl+"getTaiKhoan/"+maTk);
  }

  getTaiKhoanGvId(maTk : number):Observable<any>{
    return this.http.get(this.baseUrl+"getTaiKhoanGvId/"+maTk);
  }

  getTaiKhoanSvId(maTk : number):Observable<any>{
    return this.http.get(this.baseUrl+"getTaiKhoanSvId/"+maTk);
  }

  getKyHoc(){
    return this.http.get(this.baseUrl+"getKyHoc");
  }

  getKyHocId(maKy : number):Observable<any>{
    return this.http.get(this.baseUrl+"getKyHoc/"+maKy);
  }

  getLopHocId(maLop : number):Observable<any>{
    return this.http.get(this.baseUrl+"getLopHocId/"+maLop);
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

  createTaiKhoanDt(taiKhoan: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"createTaiKhoanDt",taiKhoan);
  }

  createTaiKhoanDb(taiKhoan: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"createTaiKhoanDb",taiKhoan);
  }

  joinSinhVien(joinSinhVien: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"joinSinhVien",joinSinhVien);
  }

  deleteKyHoc(maKy : number):Observable<any>{
    return this.http.delete(this.baseUrl+"kyHoc/"+maKy);
  }

  deleteTaiKhoanDt(maTk : number):Observable<any>{
    return this.http.delete(this.baseUrl+"deleteTaiKhoanDt/"+maTk);
  }

  deleteMonHoc(monHoc : number):Observable<any>{
    return this.http.delete(this.baseUrl+"monHoc/"+monHoc);
  }

  deleteLopHoc(lopHoc : number){
    return this.http.delete(this.baseUrl+"lopHoc/"+lopHoc);
  }

  updateKyHoc(kyHoc: Object): Observable<Object>{
    return this.http.put(this.baseUrl+"updateKyHoc",kyHoc);

<<<<<<< HEAD
  updateLopHoc(kyHoc: Object): Observable<Object>{
    return this.http.put(this.baseUrl+"updateLopHoc",kyHoc);
  }

  searchKyHoc(tenKy : number){
    return this.http.get(this.baseUrl+"searchKyHoc/"+tenKy);
=======
  }
  getSVBoard(): Observable<string>{
    return this.http.get(this.sinhVienUrl, { responseType: 'text'});
>>>>>>> e4c56dc277aeb2ccf5cb867249368957a4cb1337
  }

  getGVBoard(): Observable<string> {
    return this.http.get(this.giangVienUrl, { responseType: 'text' });
  }

<<<<<<< HEAD
  updateTaiKhoan(taiKhoan: Object): Observable<Object>{
    return this.http.put(this.baseUrl+"updateTaiKhoan",taiKhoan);
  }

  updateTaiKhoanDb(taiKhoan: Object): Observable<Object>{
    return this.http.put(this.baseUrl+"updateTaiKhoanDb",taiKhoan);
  }

  searchMonHoc(maMon: number){
    return this.http.get(this.baseUrl+"searchMonHoc/"+maMon);
=======
  getDTBoard(): Observable<string> {
    return this.http.get(this.daoTaoUrl, { responseType: 'text'});
>>>>>>> e4c56dc277aeb2ccf5cb867249368957a4cb1337
  }
}
