package com.etour.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Passenger 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pax_id;
	private int customer_id;
	private int package_id;
	private int pax_amount;
	private String pax_birthdate;
	private String pax_name;
	private String pax_type;
	private Integer booking_id;
	
	public int getPax_id() {
		return pax_id;
	}
	public void setPax_id(int pax_id) {
		this.pax_id = pax_id;
	}
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public int getPackage_id() {
		return package_id;
	}
	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}
	public int getPax_amount() {
		return pax_amount;
	}
	public void setPax_amount(int pax_amount) {
		this.pax_amount = pax_amount;
	}
	public String getPax_birthdate() {
		return pax_birthdate;
	}
	public void setPax_birthdate(String pax_birthdate) {
		this.pax_birthdate = pax_birthdate;
	}
	public String getPax_name() {
		return pax_name;
	}
	public void setPax_name(String pax_name) {
		this.pax_name = pax_name;
	}
	public String getPax_type() {
		return pax_type;
	}
	public void setPax_type(String pax_type) {
		this.pax_type = pax_type;
	}
	public Integer getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(Integer booking_id) {
		this.booking_id = booking_id;
	}
	public Passenger(int pax_id, int customer_id, int package_id, int pax_amount, String pax_birthdate,
			String pax_name, String pax_type, int booking_id) {
		super();
		this.pax_id = pax_id;
		this.customer_id = customer_id;
		this.package_id = package_id;
		this.pax_amount = pax_amount;
		this.pax_birthdate = pax_birthdate;
		this.pax_name = pax_name;
		this.pax_type = pax_type;
		this.booking_id = booking_id;
	}
	public Passenger() {
		super();
	}
}
