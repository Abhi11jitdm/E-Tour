package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.entities.Passenger;
import com.etour.repositories.PassengerRepository;

@Service
public class PassengerServiceImpl implements PassengerService
{
	@Autowired
	private PassengerRepository passengersrepository;

	@Override
	public void addPassengers(Passenger passenger) 
	{
		passengersrepository.save(passenger);
		
	}
	@Override
	public List<Passenger> getAll() 
	{
		return passengersrepository.findAll();
	}
	@Override
	public Optional<Passenger> getPassengerById(int id) 
	{
		return passengersrepository.findById(id);
	}
	@Override
	public void delete(int id) {
		passengersrepository.deleteById(id);
		
	}
	@Override
	public List<Passenger> getPassInfoByCustid(int id) {
	
		return passengersrepository.getinfo(id);
	}

}
