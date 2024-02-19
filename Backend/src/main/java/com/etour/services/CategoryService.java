package com.etour.services;

import java.util.List;
import java.util.Optional;

import com.etour.entities.Category;

public interface CategoryService {
	public List<Category> getCategory();
	public Optional<Category> getCategoryById(int id);
}
