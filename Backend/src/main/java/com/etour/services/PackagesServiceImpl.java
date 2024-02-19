package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.entities.Packages;
import com.etour.repositories.PackagesRepository;

@Service
public class PackagesServiceImpl implements PackagesService {

	@Autowired
	PackagesRepository packagesrepository;
	
	@Override
	public List<Packages> getPackages() {
		List<Packages> packages = packagesrepository.findAll();
		return packages;
	}

//	@Override
//	public Optional<Packages> getSubCategoryById(int id) {
//		
//		Optional<Packages> package = packagesrepository.findById(id);
//		return package;
//		
//	}

	@Override
	public Optional<Packages> getPackagesById(int id) {
		Optional<Packages> packages = packagesrepository.findById(id);
		return packages;
	}

}
