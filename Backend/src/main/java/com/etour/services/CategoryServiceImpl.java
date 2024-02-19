package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.entities.Category;
import com.etour.repositories.CategoryRepository;
@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	CategoryRepository categoryrepository;
	
	@Override
	public List<Category> getCategory() {
		List<Category> list = categoryrepository.findAll();
		return list;
	}

	@Override
	public Optional<Category> getCategoryById(int id) {
		Optional<Category> category = categoryrepository.findById(id);
		return category;
	}

}
