package com.etour.services;

import java.util.List;
import java.util.Optional;

import com.etour.entities.SubCategory;


public interface SubCategoryService {
	public List<SubCategory> getSubCategory();
	public Optional<SubCategory> getSubCategoryById(int id);
}
