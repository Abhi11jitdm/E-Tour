package com.etour.services;

import java.util.List;
import java.util.Optional;


import com.etour.entities.Packages;


public interface PackagesService {
	public List<Packages> getPackages();
//	public Optional<Packages> getSubCategoryById(int id);
	public Optional<Packages> getPackagesById(int id);
}
