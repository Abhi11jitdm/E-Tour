package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.etour.entities.Booking;
import com.etour.repositories.BookingRepository;
@Service
public class BookingServiceImpl implements BookingService
{
	@Autowired
	BookingRepository bookingrepository ;
	
	
	
	 @Autowired 
	 JavaMailSender javaMailSender;
	 
	   @Value("${spring.mail.username}") 
	    private String sender;
	
	@Override
	public List<Booking> getBookings() {
		
		return bookingrepository.findAll();
	}
	
	@Override
	public Optional<Booking> getBookingsbyid(int id) {
		return bookingrepository.findById(id);
	}

	@Override
	public void addBooking(Booking b) {
		bookingrepository.save(b);
		
	}

	@Override
	public String sendSimpleMail1(Booking bookingdetails) {
		 try {
			 
	            SimpleMailMessage mailMessage= new SimpleMailMessage();
	 
	            mailMessage.setFrom(sender);
	            mailMessage.setTo(bookingdetails.getRecipient());
	            mailMessage.setText(bookingdetails.getMsgBody());
	           // mailMessage.setSubject("New Enquiry of : "+details.getName()+" : "+details.getUseremail());
	 
	          
	            javaMailSender.send(mailMessage);
	            return "Mail Sent Successfully...";
	        }
	 
	        catch (Exception e) {
	            return "Error while Sending Mail";
	        }
	}
}