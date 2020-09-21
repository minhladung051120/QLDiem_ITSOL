package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.dto.MonHoc;
import com.example.demo.model.monhoc;

public interface MonHocRepository extends JpaRepository<monhoc, String>{
	@Query("SELECT new com.example.demo.dto.MonHoc(m.maMon,m.tenMon,k.tenKy,k.thoiGian,k.thoiGianKt) FROM kyhoc k JOIN k.monhocs m")
    public List<MonHoc> getMonHoc();
}
