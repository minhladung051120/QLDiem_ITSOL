package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BangDiem;
import com.example.demo.repository.BangDiemRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class bangdiemController {
	@Autowired
	private BangDiemRepository bangDiemRepository;
	
	@GetMapping("/getBangDiem")
	public List<BangDiem> getBangDiem() {
		return bangDiemRepository.getBangDiem();
	}
}
