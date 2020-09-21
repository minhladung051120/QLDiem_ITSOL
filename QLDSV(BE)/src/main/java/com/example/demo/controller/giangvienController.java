package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.giangvien;
import com.example.demo.repository.GiangVienRepository;

@RestController
public class giangvienController {
	@Autowired
	private GiangVienRepository giangVienRepository;

	@GetMapping("/giangvien")
	public List<giangvien> getAllGiangVien() {
		return giangVienRepository.findAll();
	}
}
