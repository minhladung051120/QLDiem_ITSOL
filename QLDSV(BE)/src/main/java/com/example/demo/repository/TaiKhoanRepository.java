package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.dto.TaiKhoan;
import com.example.demo.model.taikhoan;


public interface TaiKhoanRepository extends JpaRepository<taikhoan, String>{
	@Query("SELECT new com.example.demo.dto.TaiKhoan(hoTen,tenTk,chucVu,email,diaChi) FROM taikhoan where chucVu like 'SV'")
    public List<TaiKhoan> getTaiKhoanSv();
	
	@Query("SELECT new com.example.demo.dto.TaiKhoan(hoTen,tenTk,chucVu,email,diaChi) FROM taikhoan where chucVu like 'GV'")
    public List<TaiKhoan> getTaiKhoanGv();
	
	@Query("SELECT new com.example.demo.dto.TaiKhoan(hoTen,tenTk,chucVu,email,diaChi) FROM taikhoan where chucVu like 'DT'")
    public List<TaiKhoan> getTaiKhoanDt();
	
	@Query("SELECT new com.example.demo.dto.TaiKhoan(hoTen,tenTk,chucVu,email,diaChi) FROM taikhoan")
    public List<TaiKhoan> getTaiKhoan();
}
