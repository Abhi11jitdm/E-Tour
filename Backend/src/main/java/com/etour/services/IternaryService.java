package com.etour.services;

import java.util.List;
import java.util.Optional;

import com.etour.entities.Iternary;

public interface IternaryService {
	public List<Iternary> getIternary();
	public Optional<Iternary> getIternaryById(int id);
}
