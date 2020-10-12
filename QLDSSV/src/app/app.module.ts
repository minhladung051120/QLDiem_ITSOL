import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HomeComponent } from './home/home.component';
import { DaotaoComponent } from './html-daotao/daotao/daotao.component';
import { DaotaobangtinComponent } from './html-daotao/daotaobangtin/daotaobangtin.component';
import { DaotaoQLTKComponent } from './html-daotao/daotao-qltk/daotao-qltk.component';
import { DaotaothemtkComponent } from './html-daotao/daotaothemtk/daotaothemtk.component';
import { DaotaoQlkyhocComponent } from './html-daotao/daotao-qlkyhoc/daotao-qlkyhoc.component';
import { DaotaothemkyhocComponent } from './html-daotao/daotaothemkyhoc/daotaothemkyhoc.component';
import { DaotaoQlmhComponent } from './html-daotao/daotao-qlmh/daotao-qlmh.component';
import { DaotaothemmonhocComponent } from './html-daotao/daotaothemmonhoc/daotaothemmonhoc.component';
import { DaotaoQllhComponent } from './html-daotao/daotao-qllh/daotao-qllh.component';
import { DaotaothemlophocComponent } from './html-daotao/daotaothemlophoc/daotaothemlophoc.component';
import { EditLophocComponent } from './html-daotao/edit-lophoc/edit-lophoc.component';
import { DaotaoQldiemComponent } from './html-daotao/daotao-qldiem/daotao-qldiem.component';
import { GiangvienComponent } from './html-giangvien/giangvien/giangvien.component';
import { GiangvienMonhocComponent } from './html-giangvien/giangvien-monhoc/giangvien-monhoc.component';
import { GiangvienLophocComponent } from './html-giangvien/giangvien-lophoc/giangvien-lophoc.component';
import { GiangvienDiemComponent } from './html-giangvien/giangvien-diem/giangvien-diem.component';
import { SinhvienBangdiemComponent } from './html-sinhvien/sinhvien-bangdiem/sinhvien-bangdiem.component';
import { SinhvienLichhocComponent } from './html-sinhvien/sinhvien-lichhoc/sinhvien-lichhoc.component';
import { SinhvienComponent } from './html-sinhvien/sinhvien/sinhvien.component';
import { EditTaikhoanComponent } from './html-daotao/edit-taikhoan/edit-taikhoan.component';
import { EditKyhocComponent } from './html-daotao/edit-kyhoc/edit-kyhoc.component';
import { EditMonhocComponent } from './html-daotao/edit-monhoc/edit-monhoc.component';
import { EditDiemComponent } from './html-daotao/edit-diem/edit-diem.component';
import { DanhsachSVComponent } from './html-daotao/danhsach-sv/danhsach-sv.component';
import { SlideComponent } from './html-daotao/slide/slide.component';
import { DaotaothemsvComponent } from './html-daotao/daotaothemsv/daotaothemsv.component';
<<<<<<< HEAD
import { DaotaothemtksvComponent } from './html-daotao/daotaothemtksv/daotaothemtksv.component';
import { DaotaothemtkgvComponent } from './html-daotao/daotaothemtkgv/daotaothemtkgv.component';
import { EditTaikhoansvComponent } from './html-daotao/edit-taikhoansv/edit-taikhoansv.component';
import { EditTaikhoangvComponent } from './html-daotao/edit-taikhoangv/edit-taikhoangv.component';
=======
import { HomesvComponent } from './html-sinhvien/homesv/homesv.component';
import { HomegvComponent } from './html-giangvien/homegv/homegv.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
>>>>>>> e4c56dc277aeb2ccf5cb867249368957a4cb1337


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrangchuComponent,
    HomeComponent,
    DaotaoComponent,
    DaotaobangtinComponent,
    DaotaoQLTKComponent,
    DaotaothemtkComponent,
    DaotaoQlkyhocComponent,
    DaotaothemkyhocComponent,
    DaotaoQlmhComponent,
    DaotaothemmonhocComponent,
    DaotaoQllhComponent,
    DaotaothemlophocComponent,
    EditLophocComponent,
    DaotaoQldiemComponent,
    GiangvienComponent,
    GiangvienMonhocComponent,
    GiangvienLophocComponent,
    GiangvienDiemComponent,
    SinhvienBangdiemComponent,
    SinhvienLichhocComponent,
    SinhvienComponent,
    EditTaikhoanComponent,
    EditKyhocComponent,
    EditMonhocComponent,
    EditDiemComponent,
    DanhsachSVComponent,
    SlideComponent,
    DaotaothemsvComponent,
<<<<<<< HEAD
    DaotaothemtksvComponent,
    DaotaothemtkgvComponent,
    EditTaikhoansvComponent,
    EditTaikhoangvComponent,
=======
    HomesvComponent,
    HomegvComponent,
>>>>>>> e4c56dc277aeb2ccf5cb867249368957a4cb1337
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
