package com.etour.entities;


import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Customers {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customer_id;
	private String firstname;
	private String lastname;
	private String dateofbirth;
	private String email;
	private String gender;
	private String mobile;
	private String password;
	private String username;
	private String address;
	private String city;
	private String state;
	private String pincode;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id" , referencedColumnName = "customer_id")
	private Set<Booking>booking;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id" , referencedColumnName = "customer_id")
	private Set<Passenger>passenger;

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public Set<Booking> getBooking() {
		return booking;
	}

	public void setBooking(Set<Booking> booking) {
		this.booking = booking;
	}

	public Set<Passenger> getPassenger() {
		return passenger;
	}

	public void setPassenger(Set<Passenger> passenger) {
		this.passenger = passenger;
	}

	public Customers(int customer_id, String firstname, String lastname, String dateofbirth, String email,
			String gender, String mobile, String password, String username, String address, String city, String state,
			String pincode, Set<Booking> booking, Set<Passenger> passenger) {
		super();
		this.customer_id = customer_id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.dateofbirth = dateofbirth;
		this.email = email;
		this.gender = gender;
		this.mobile = mobile;
		this.password = password;
		this.username = username;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.booking = booking;
		this.passenger = passenger;
	}
	
	public Customers() {
		super();
	}

	@Override
	public String toString() {
		return "Customers [customer_id=" + customer_id + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", dateofbirth=" + dateofbirth + ", email=" + email + ", gender=" + gender + ", mobile=" + mobile
				+ ", password=" + password + ", username=" + username + ", address=" + address + ", city=" + city
				+ ", state=" + state + ", pincode=" + pincode + ", booking=" + booking + ", passenger=" + passenger
				+ "]";
	}
}
