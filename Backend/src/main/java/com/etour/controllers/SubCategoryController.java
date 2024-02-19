package com.etour.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.etour.entities.SubCategory;
import com.etour.services.SubCategoryService;

@RestController
@CrossOrigin("*")
public class SubCategoryController {
	@Autowired
	SubCategoryService service;
	
	@GetMapping("/api/subcategories")
	public List<SubCategory> getSubCategory() {
		List<SubCategory> ls = service.getSubCategory();
		return ls;
	}
	
	@GetMapping("/api/subcategory/{id}")
	public Optional<SubCategory> getSubCategoryById(@PathVariable int id) {
		Optional<SubCategory> ls = service.getSubCategoryById(id);
		return ls;
	}
}