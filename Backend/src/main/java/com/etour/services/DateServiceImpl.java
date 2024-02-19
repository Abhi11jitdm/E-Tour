package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.entities.Date;
import com.etour.repositories.DateRepository;

@Service
public class DateServiceImpl implements DateService {

	@Autowired
	DateRepository dateRepository;
	
	@Override
	public List<Date> getDate() {
		List<Date> dates = dateRepository.findAll();
		return dates;
	}

	@Override
	public Optional<Date> getDateById(int id) {
		Optional<Date> date = dateRepository.findById(id);
		return date;
	}
	
}
