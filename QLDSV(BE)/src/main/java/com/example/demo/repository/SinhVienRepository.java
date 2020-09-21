package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.dto.SinhVien;
import com.example.demo.model.sinhvien;

public interface SinhVienRepository extends JpaRepository<sinhvien, String> {
	@Query("SELECT new com.example.demo.dto.SinhVien(s.maSv,t.hoTen,s.khoa,t.email,t.sdt,t.diaChi,l.maLop,l.tenLop) FROM lophoc l JOIN l.bangdiem b JOIN b.sinhvien s JOIN s.taikhoan t where t.chucVu like 'SV'")
    public List<SinhVien> getSinhVien();
}
