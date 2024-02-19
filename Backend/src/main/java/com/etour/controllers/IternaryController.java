package com.etour.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.etour.entities.Iternary;
import com.etour.services.IternaryService;

@RestController
@CrossOrigin("*")
public class IternaryController {
	@Autowired
	IternaryService iternaryService;
	
	@GetMapping("/api/iternaries")
	public List<Iternary> getIternary(){
		List<Iternary> iternaries = iternaryService.getIternary();
		return iternaries;
		
	}
	
	@GetMapping("/api/iternary/{id}")
	public Optional<Iternary> getIternaryById(@PathVariable int id){
		Optional<Iternary> iternary = iternaryService.getIternaryById(id);
		return iternary;
	}
}
