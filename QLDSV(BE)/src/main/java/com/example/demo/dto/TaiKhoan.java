package com.example.demo.dto;

public class TaiKhoan {
	private String hoTen;
	private String tenTk;
	private String chucVu;
	private String email;
	private String diaChi;
	
	public TaiKhoan(String hoTen, String tenTk, String chucVu, String email, String diaChi) {
		super();
		this.hoTen = hoTen;
		this.tenTk = tenTk;
		this.chucVu = chucVu;
		this.email = email;
		this.diaChi = diaChi;
	}
	public String getHoTen() {
		return hoTen;
	}
	public void setHoTen(String hoTen) {
		this.hoTen = hoTen;
	}
	public String getTenTk() {
		return tenTk;
	}
	public void setTenTk(String tenTk) {
		this.tenTk = tenTk;
	}
	public String getChucVu() {
		return chucVu;
	}
	public void setChucVu(String chucVu) {
		this.chucVu = chucVu;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDiaChi() {
		return diaChi;
	}
	public void setDiaChi(String diaChi) {
		this.diaChi = diaChi;
	}
	
	
}
