package com.etour.entities;



import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Booking {
	   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer booking_id;
	private String  booking_date;
	private int customer_id;
	private int flag;
	private int package_id;
	private double  tour_amount;
	private double total_amount;
	private double taxes;
	private String email;
	//----------------------
	private String recipient;  
    private String msgBody;
    //----------------------
	
	
	@Override
	public String toString() {
		return "Booking [booking_id=" + booking_id + ", booking_date=" + booking_date + ", customer_id=" + customer_id
				+ ", flag=" + flag + ", package_id=" + package_id + ", tour_amount=" + tour_amount + ", total_amount="
				+ total_amount + ", taxes=" + taxes + ", email=" + email + ", passenger=" + passenger + "]";
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<Passenger> getPassenger() {
		return passenger;
	}

	public void setPassenger(Set<Passenger> passenger) {
		this.passenger = passenger;
	}

	@OneToMany
	@JoinColumn(name = "booking_id",referencedColumnName = "booking_id")
	private Set<Passenger> passenger;

	public Integer getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Integer booking_id) {
		this.booking_id = booking_id;
	}

	public String getBooking_date() {
		return booking_date;
	}

	public void setBooking_date(String booking_date) {
		this.booking_date = booking_date;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public int getPackage_id() {
		return package_id;
	}

	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}

	public double getTour_amount() {
		return tour_amount;
	}

	public void setTour_amount(double tour_amount) {
		this.tour_amount = tour_amount;
	}

	public double getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}

	public double getTaxes() {
		return taxes;
	}

	public void setTaxes(double taxes) {
		this.taxes = taxes;
	}

	public Set<Passenger> getPassengers() {
		return passenger;
	}

	public void setPassengers(Set<Passenger> passenger) {
		this.passenger = passenger;
	}
	
	//----------------------------------------------------

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getMsgBody() {
		return msgBody;
	}

	public void setMsgBody(String msgBody) {
		this.msgBody = msgBody;
	}
	
	//---------------------------------------------------------

	public Booking(int booking_id, String booking_date, int customer_id, int flag, int package_id, double tour_amount,
			double total_amount, double taxes, Set<Passenger> passenger, String email) {
		super();
		this.booking_id = booking_id;
		this.booking_date = booking_date;
		this.customer_id = customer_id;
		this.flag = flag;
		this.package_id = package_id;
		this.tour_amount = tour_amount;
		this.total_amount = total_amount;
		this.taxes = taxes;
		this.passenger = passenger;
		this.email=email;
	}
	
	public Booking() {
		super();
	}
}	

