package com.etour.services;

import java.util.List;
import java.util.Optional;

import com.etour.entities.Booking;

public interface BookingService
{
	List<Booking> getBookings();
	Optional<Booking> getBookingsbyid(int id);	
	void addBooking(Booking b);
	
	
	String sendSimpleMail1(Booking bookingdetails);
}
