package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TaiKhoan;
import com.example.demo.repository.TaiKhoanRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class taikhoanController {
	@Autowired
	private TaiKhoanRepository taiKhoanRepository;

	@GetMapping("/getTaiKhoanSv")
	public List<TaiKhoan> getTaiKhoanSv() {
		return taiKhoanRepository.getTaiKhoanSv();
	}

	@GetMapping("/getTaiKhoanGv")
	public List<TaiKhoan> getTaiKhoanGv() {
		return taiKhoanRepository.getTaiKhoanGv();
	}
	
	@GetMapping("/getTaiKhoanDt")
	public List<TaiKhoan> getTaiKhoanDt() {
		return taiKhoanRepository.getTaiKhoanDt();
	}
	
	@GetMapping("/getTaiKhoan")
	public List<TaiKhoan> getTaiKhoan() {
		return taiKhoanRepository.getTaiKhoan();
	}
}
