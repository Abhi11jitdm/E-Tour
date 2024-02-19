package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.entities.Iternary;
import com.etour.repositories.IternaryRepository;

@Service
public class IternaryServiceImpl implements IternaryService {

	@Autowired
	IternaryRepository iternaryRepository;
	@Override
	public List<Iternary> getIternary() {
		List<Iternary> iternaries = iternaryRepository.findAll();
		return iternaries;
	}

	@Override
	public Optional<Iternary> getIternaryById(int id) {
		Optional<Iternary> iternary = iternaryRepository.findById( id);
		return iternary;
	}

}
