package com.etour.services;

import java.util.List;
import java.util.Optional;

import com.etour.entities.Date;

public interface DateService {
	public List<Date> getDate();
	public Optional<Date> getDateById(int id);
}