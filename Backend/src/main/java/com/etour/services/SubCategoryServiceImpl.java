package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.entities.SubCategory;
import com.etour.repositories.SubCategoryRepository;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

	@Autowired
	SubCategoryRepository subcategoryrepository;
	@Override
	public List<SubCategory> getSubCategory() {
		List<SubCategory> subcategories = subcategoryrepository.findAll();
		return subcategories;
	}

	@Override
	public Optional<SubCategory> getSubCategoryById(int id) {
		Optional<SubCategory> subcategory = subcategoryrepository.findById(id);
		return subcategory;
	}

}
