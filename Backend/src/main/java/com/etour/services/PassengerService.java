package com.etour.services;

import java.util.List;
import java.util.Optional;

import com.etour.entities.Passenger;

public interface PassengerService
{
	void addPassengers(Passenger passenger);
	List<Passenger> getAll();
	void delete(int id);
	Optional< Passenger> getPassengerById(int id);
	List<Passenger> getPassInfoByCustid(int id);
	
}
