package com.etour.services;

import java.util.List;
import java.util.Optional;

import com.etour.entities.Cost;

public interface CostService {
	public List<Cost> getAllCost();
	public Optional<Cost> getCostById(int id);
	public Cost getCostByPackageId(int id);
}
