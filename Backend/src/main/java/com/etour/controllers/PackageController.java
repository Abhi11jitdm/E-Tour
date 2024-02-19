package com.etour.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.etour.entities.Packages;
import com.etour.services.PackagesService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("*")
public class PackageController {
	
	@Autowired
	PackagesService service;
	
	@GetMapping("/api/packages")
	public List<Packages> getPackages() {
		List<Packages> ls = service.getPackages();
		return ls;
	}
	
	@GetMapping("/api/package/{id}")
	public Optional<Packages> getPackagesById(@PathVariable int id) {
		Optional<Packages> ls = service.getPackagesById(id);
		return ls;
	}
	
}
