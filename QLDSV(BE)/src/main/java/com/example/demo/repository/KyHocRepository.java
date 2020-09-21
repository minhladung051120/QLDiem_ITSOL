package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.dto.KyHoc;
import com.example.demo.model.kyhoc;

public interface KyHocRepository extends JpaRepository<kyhoc, String> {
	@Query("SELECT new com.example.demo.dto.KyHoc(maKy,tenKy,thoiGian,thoiGianKt) FROM kyhoc")
    public List<KyHoc> getKyHoc();
	
}
