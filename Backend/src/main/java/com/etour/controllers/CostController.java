package com.etour.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.etour.entities.Cost;
import com.etour.services.CostService;

@RestController
@CrossOrigin("*")
public class CostController {
	@Autowired
	CostService costService;
	
	@GetMapping("/api/costs")
	public List<Cost> getAllCost(){
		List<Cost> ls = costService.getAllCost();
		return ls;
	}
	
	@GetMapping("/api/cost/{id}")
	public Optional<Cost> getCostById(@PathVariable int id){
		Optional<Cost> ls = costService.getCostById(id);
		return ls;
	}
	
	@GetMapping("/api/package/cost/{id}")
	public Cost getCostByPackageId(@PathVariable int id) {
		Cost c = costService.getCostByPackageId(id);
		return c;
	}
}