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

import com.example.demo.dto.MonHoc;
import com.example.demo.model.monhoc;
import com.example.demo.repository.MonHocRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class monhocController {
	@Autowired
	private MonHocRepository monHocRepository;
	
	@GetMapping("/getMonHoc")
	public List<MonHoc> getMonHoc() {
		return monHocRepository.getMonHoc();
	}
	
	@PostMapping("/monHoc")
	public monhoc createMonHoc(@RequestBody monhoc monhoc) {
		return monHocRepository.save(monhoc);
	}
	
	@DeleteMapping("/monHoc/{id}")
	public Map<String, Boolean> deleteMonHoc(@PathVariable(value = "id") String maMon){
		Optional<monhoc> optionalMh = monHocRepository.findById(maMon);
		monhoc mh = optionalMh.get();
		monHocRepository.delete(mh);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		   return response;
	}
}
