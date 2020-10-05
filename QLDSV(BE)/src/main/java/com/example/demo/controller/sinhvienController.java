package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.SinhVien;
import com.example.demo.dto.getLopHocBySv;
import com.example.demo.repository.SinhVienRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class sinhvienController {
	@Autowired
	private SinhVienRepository sinhVienRepository;
	
	@GetMapping("/getSinhVien")
	public List<SinhVien> getSinhVien() {
		return sinhVienRepository.getSinhVien();
	}
	
	@GetMapping("/getLopHocBySv")
	public List<getLopHocBySv> getLopHocBySv() {
		return sinhVienRepository.getLopHocBySv();
	}
}
