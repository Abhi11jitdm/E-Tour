package com.etour.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
public class Packages {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int package_id;
	private String package_name;
	private String package_image_path;
	private String package_info;
	@Column(nullable = true)
	private Integer subcategory_id;
	@Column(nullable = true)
	private int category_id;
	
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public String getPackage_info() {
		return package_info;
	}
	public void setPackage_info(String package_info) {
		this.package_info = package_info;
	}
	@Column(nullable = true)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "package_id",referencedColumnName = "package_id")
	private Set<Date> date;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "package_id",referencedColumnName = "package_id")
	private Set<Iternary> iternary;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "package_id",referencedColumnName = "package_id")
	private Set<Cost> costs;
	
	public Set<Cost> getCosts() {
		return costs;
	}
	public void setCosts(Set<Cost> costs) {
		this.costs = costs;
	}
	public Set<Booking> getBookings() {
		return bookings;
	}
	public void setBookings(Set<Booking> bookings) {
		this.bookings = bookings;
	}
	public Set<Passenger> getPassenger() {
		return passenger;
	}
	public void setPassenger(Set<Passenger> passenger) {
		this.passenger = passenger;
	}
	public void setSubcategory_id(Integer subcategory_id) {
		this.subcategory_id = subcategory_id;
	}
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "package_id",referencedColumnName = "package_id")
	private Set<Booking> bookings;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "package_id",referencedColumnName = "package_id")
	private Set<Passenger> passenger;
	
	
	
	
	public Set<Iternary> getIternary() {
		return iternary;
	}
	public void setIternary(Set<Iternary> iternary) {
		this.iternary = iternary;
	}
	public Set<Date> getDate() {
		return date;
	}
	public void setDate(Set<Date> date) {
		this.date = date;
	}
	public Integer getSubcategory_id() {
		return subcategory_id;
	}
	public void setSubcategory_id(int subcategory_id) {
		this.subcategory_id = subcategory_id;
	}
	public int getPackage_id() {
		return package_id;
	}
	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}
	public String getPackage_name() {
		return package_name;
	}
	public void setPackage_name(String package_name) {
		this.package_name = package_name;
	}
	public String getPackage_image_path() {
		return package_image_path;
	}
	public void setPackage_image_path(String package_image_path) {
		this.package_image_path = package_image_path;
	}
	
	
	public Packages(int package_id, String package_name, String package_image_path, String package_info,
			int subcategory_id, Set<Date> date, Set<Iternary> iternary) {
		super();
		this.package_id = package_id;
		this.package_name = package_name;
		this.package_image_path = package_image_path;
		this.package_info = package_info;
		this.subcategory_id = subcategory_id;
		this.date = date;
		this.iternary = iternary;
	}
	public Packages() {
		super();
	}
	@Override
	public String toString() {
		return "Packages [package_id=" + package_id + ", package_name=" + package_name + ", package_image_path="
				+ package_image_path + ", package_info=" + package_info + ", subcategory_id=" + subcategory_id
				+ ", date=" + date + ", iternary=" + iternary + "]";
	}
}