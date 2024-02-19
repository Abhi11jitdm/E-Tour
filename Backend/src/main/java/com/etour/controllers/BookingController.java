package com.etour.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.etour.entities.Booking;
import com.etour.services.BookingService;

@RestController
@CrossOrigin("*")
public class BookingController 
{
	@Autowired
	private  BookingService bookingservice;
	
	@GetMapping(value = "api/booking")
	public List<Booking> showbookings()
	{
		return bookingservice.getBookings();
	}
	
	@GetMapping(value = "api/booking/{id}")
	public Optional<Booking> getbook(@PathVariable int id)
	{
		return bookingservice.getBookingsbyid(id);
		
	}
	@PostMapping(value = "api/booking")
	public void addBooking(@RequestBody Booking b ) {
		bookingservice.addBooking(b);
	}
	
	 @PostMapping("/sendMail")
	 public ResponseEntity <String> sendMail(@RequestBody Booking bookingdetails)
	 {  	
		 System.out.println(bookingdetails);    
	     String status= bookingservice.sendSimpleMail1(bookingdetails);
	     return ResponseEntity.ok(status);
	 }
	 
	 
}