package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.KyHoc;
import com.example.demo.model.kyhoc;
import com.example.demo.repository.KyHocRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class kyhocController {
	@Autowired
	private KyHocRepository kyHocRepository;
	
	@GetMapping("/getKyHoc")
	public List<KyHoc> getKyHoc() {
		return kyHocRepository.getKyHoc();
	}
	
	@GetMapping("/getKyHoc/{id}")
	public kyhoc getKyHocId(@PathVariable(value = "id") String maKy) {
		Optional<kyhoc> optionalKh = kyHocRepository.findById(maKy);
		kyhoc kh = optionalKh.get();
		return kh;
	}
	
	@PostMapping("/kyHoc")
	public kyhoc createKyHoc(@RequestBody kyhoc kyhoc) {
		return kyHocRepository.save(kyhoc);
	}
	
	@DeleteMapping("/kyHoc/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") String maKy){
		Optional<kyhoc> optionalKh = kyHocRepository.findById(maKy);
		kyhoc kh = optionalKh.get();
		kyHocRepository.delete(kh);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		   return response;
	}
}
