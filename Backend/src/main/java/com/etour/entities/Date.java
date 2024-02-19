package com.etour.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity 
public class Date 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int departure_id;
	private String departure_date;
	private String departure_end_date;
	private int package_id;
	private int departure_no_of_days;
	

	public int getDeparture_id() {
		return departure_id;
	}

	public void setDeparture_id(int departure_id) {
		this.departure_id = departure_id;
	}

	public String getDeparture_date() {
		return departure_date;
	}
	
	public void setDeparture_date(String departure_date) {
		this.departure_date = departure_date;
	}

	public String getDeparture_end_date() {
		return departure_end_date;
	}

	public void setDeparture_end_date(String departure_end_date) {
		this.departure_end_date = departure_end_date;
	}

	public int getPackage_id() {
		return package_id;
	}

	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}

	public int getDeparture_no_of_days() {
		return departure_no_of_days;
	}

	public void setDeparture_no_of_days(int departure_no_of_days) {
		this.departure_no_of_days = departure_no_of_days;
	}

	public Date() {
		super();
	}
	
	public Date(int departure_id, String departure_date, String departure_end_date, int package_id,
			int departure_no_of_days) {
		super();
		this.departure_id = departure_id;
		this.departure_date = departure_date;
		this.departure_end_date = departure_end_date;
		this.package_id = package_id;
		this.departure_no_of_days = departure_no_of_days;
	}
	
	@Override
	public String toString() {
		return "date [departure_id=" + departure_id + ", departure_date=" + departure_date + ", departure_end_date="
				+ departure_end_date + ", package_id=" + package_id + ", departure_no_of_days=" + departure_no_of_days
				+ "]";
	}

}