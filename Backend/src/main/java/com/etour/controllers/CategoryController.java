package com.etour.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.etour.entities.Category;
import com.etour.services.CategoryService;


@RestController
@CrossOrigin("*")
public class CategoryController {
	@Autowired
	CategoryService service;
	
	@GetMapping("/api/categories")
	public List<Category> getCategory() {
		List <Category> ls = service.getCategory();
		return ls;
	}
	
	@GetMapping("/api/category/{id}")
	public Optional<Category> getCategoryById(@PathVariable int id) {
		Optional<Category> ls = service.getCategoryById(id);
		return ls;
	}
}