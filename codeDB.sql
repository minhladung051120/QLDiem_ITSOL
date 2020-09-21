drop database QLDSV ; 
create database QLDSV;
use QLDSV;

create table taikhoan(
ma_tk varchar(10) not null,
ten_tk varchar(50) not null,
mat_khau varchar(50) not null,
ho_ten varchar(50) not null,
email varchar(50) not null,
sdt varchar(10) not null,
dia_chi varchar(50) not null,
chuc_vu varchar(10) not null,
primary key(ma_tk)
);



create table giangvien(
ma_gv varchar(10) not null,
ma_tk varchar(10) not null,
primary key(ma_gv),
foreign key(ma_tk) references taikhoan(ma_tk)
);



create table sinhvien(
ma_sv varchar(10) not null,
khoa varchar(10) not null,
ma_tk varchar(10) not null,
primary key(ma_sv),
foreign key(ma_tk) references taikhoan(ma_tk)
);



create table kyhoc(
ma_ky varchar(10) not null,
ten_ky varchar(50) not null,
thoi_gian date not null,
thoi_gian_kt date not null,
primary key(ma_ky)
);



create table monhoc(
ma_mon varchar(10) not null,
ten_mon varchar(50) not null,
ma_ky varchar(10) not null,
primary key(ma_mon),
foreign key (ma_ky) references kyhoc(ma_ky)
);




create table lophoc(
ma_lop varchar(10) not null,
ten_lop varchar(50) not null,
ma_mon varchar(10) not null,
ma_gv varchar(10) ,
primary key(ma_lop),
foreign key(ma_mon) references monhoc(ma_mon),
foreign key(ma_gv) references giangvien(ma_gv)
);



create table bangdiem(
ma_bd int auto_increment not null,
ma_sv varchar(10) not null,
ma_lop varchar(10) not null,
diem_tl float ,
diem_ck float,
primary key(ma_bd),
foreign key(ma_sv) references sinhvien(ma_sv),
foreign key(ma_lop) references lophoc(ma_lop)
);

-- insert tài khoản
INSERT INTO taikhoan VALUES('TK001','Daotao01','123456','Nguyễn Văn Tạo','taonv@gmail.com',0395768578,'Hà Nội','ĐT');
INSERT INTO taikhoan VALUES('TK002','Giangvien01','123456','Nguyễn Văn Viên','viennv@gmail.com',0395768577,'Hà Nội','GV');
INSERT INTO taikhoan VALUES('TK003','Sinhvien01','123456','Nguyễn Văn Sinh','sinhnv@gmail.com',0395768557,'Hà Nội','SV');

-- insert Giảng viên
INSERT INTO GiangVien VALUES('GV001','TK002');

-- insert sinh viên
INSERT INTO SinhVien VALUES('SV01','14.3','TK003');

-- insert kỳ học
INSERT INTO KyHoc  VALUES('KH01','Summer ','2020/8/9','2020/12/9');
INSERT INTO KyHoc  VALUES('KH02','Kỳ 2','2021/2/7','2021/5/7');

-- insert Môn học
INSERT INTO  MonHoc  VALUES('TCC01','Toán Cao cấp 1','KH01');
INSERT INTO  MonHoc VALUES('TH01','Triết học','KH01');
INSERT INTO  MonHoc VALUES('GDTT','Giáo dục thể chất','KH01');
INSERT INTO  MonHoc  VALUES('PLDC01','Pháp luật đại cương','KH01');
INSERT INTO  MonHoc VALUES('NN01','Ngoại ngữ 1','KH01');

INSERT INTO  MonHoc  VALUES('TCC02','Toán Cao cấp 2','KH02');
INSERT INTO  MonHoc  VALUES('GDQP01','Giáo dục quốc phòng','KH02');
INSERT INTO  MonHoc  VALUES('KTVM01','Kinh tế vĩ mô','KH02');
INSERT INTO  MonHoc  VALUES('NN02','Ngoại ngữ 2','KH02');
INSERT INTO  MonHoc  VALUES('THDC01','Tin học đại cương','KH02');
 
 
 -- insert lớp học
INSERT INTO LopHoc VALUES('PT01','Web01','TCC01','GV001');
INSERT INTO LopHoc  VALUES('PT02','Đồ họa','TH01','GV001');

-- insert bảng điểm
INSERT INTO BangDiem (ma_sv,ma_lop,diem_tl,diem_ck)  VALUES('SV01','PT01',6,8);
INSERT INTO BangDiem  (ma_sv,ma_lop,diem_tl,diem_ck) VALUES('SV01','PT02',10,10);
/* select

select * from taikhoan;
select * from SinhVien;
select * from GiangVien;
select * from LopHoc;
select * from BangDiem;
select * from KyHoc;
select * from MonHoc;

drop table TaiKhoan;
delete from TaiKhoan where matk='SV001'

drop table GiangVien;
drop table SinhVien;
drop table KyHoc;
drop table MonHoc;
drop table LopHoc;
drop table BangDiem;


drop database QLDSV ; 
*/



