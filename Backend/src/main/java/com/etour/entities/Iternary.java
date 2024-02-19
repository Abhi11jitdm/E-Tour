package com.etour.entities;


import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Iternary 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int iternery_id;
    private String iternery_day;
	private String iternery_info;
	private String iternery_imgpath;
	@Column(nullable = true)
	private int package_id;
	
	public int getIternery_id() {
		return iternery_id;
	}

	public void setIternery_id(int iternery_id) {
		this.iternery_id = iternery_id;
	}

	public String getIternery_day() {
		return iternery_day;
	}

	public void setIternery_day(String iternery_day) {
		this.iternery_day = iternery_day;
	}

	public String getIternery_info() {
		return iternery_info;
	}

	public void setIternery_info(String iternery_info) {
		this.iternery_info = iternery_info;
	}

	public String getIternery_imgpath() {
		return iternery_imgpath;
	}

	public void setIternery_imgpath(String iternery_imgpath) {
		this.iternery_imgpath = iternery_imgpath;
	}

	public int getPackage_id() {
		return package_id;
	}

	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}

	public Iternary(int iternery_id, String iternery_day, String iternery_info, String iternery_imgpath,
			int package_id) {
		super();
		this.iternery_id = iternery_id;
		this.iternery_day = iternery_day;
		this.iternery_info = iternery_info;
		this.iternery_imgpath = iternery_imgpath;
		this.package_id = package_id;
	}

	public Iternary() {
		super();
	}

	@Override
	public String toString() {
		return "Iternary [iternery_id=" + iternery_id + ", iternery_day=" + iternery_day + ", iternery_info="
				+ iternery_info + ", iternery_imgpath=" + iternery_imgpath + ", package_id=" + package_id + "]";
	}
	
	
	
}