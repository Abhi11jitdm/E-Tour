package com.etour.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.etour.entities.Date;
import com.etour.services.DateService;

@RestController
@CrossOrigin("*")
public class DateController {
	
	@Autowired
	DateService dateService;
	
	@GetMapping("/api/dates")
	public List<Date> getDates(){
		List<Date> dates = dateService.getDate();
		return dates;
	}
	
	@GetMapping("/api/date/{id}")
	public Optional<Date> getDate(@PathVariable int id){
		Optional<Date> date = dateService.getDateById(id);
		return date;
	}	
}
