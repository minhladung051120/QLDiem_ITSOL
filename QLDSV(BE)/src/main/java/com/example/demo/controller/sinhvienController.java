package com.example.demo.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ExcelGenerator;
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
	@GetMapping(value = "/export/sinhvien")
	
	public void exportToexcel(HttpServletResponse response,@RequestParam(defaultValue = "")String date) throws IOException{
//		response.setContentType("application/octet-stream");
//		String date1= "2020-09";
//		DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
//		String currentDatetime = dateFormatter.format(new Date());
		String headerKey = "Content-Disposition";
		String headerValue = "attachment; filename=sinhvien.xlsx";
		response.setHeader(headerKey, headerValue);
		
		List<SinhVien> sinhvien = sinhVienRepository.getSinhVien();
		ExcelGenerator excelGenerator = new ExcelGenerator(sinhvien);
		excelGenerator.export(response);
		
	}
//	public ResponseEntity<InputStreamResource> excelSinhvien() throws IOException {
//        List<SinhVien> sinhvien = (List<SinhVien>) sinhVienRepository.getSinhVien();
//        
//        ByteArrayInputStream in = ExcelGenerator.(sinhvien);
//     // return IOUtils.toByteArray(in);
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Content-Disposition", "attachment; filename=sinhvien.xlsx");
//        return ResponseEntity
//                .ok()
//                .headers(headers)
//                .body(new InputStreamResource(in));
//	}
}
