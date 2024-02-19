package com.etour.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.entities.Customers;
import com.etour.repositories.CustomersRepository;
@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomersRepository customersRepository;
	@Override
	public List<Customers> getcustomers() {
		List<Customers> ls = customersRepository.findAll();
		return ls;
	}

	@Override
	public Optional<Customers> getcustomerbyid(int id) {
		Optional<Customers> ls = customersRepository.findById(id);
		return ls;
	}

	@Override
	public void addCustomer(Customers customers) {
		customersRepository.save(customers);
	}

	@Override
	public void deleteCustomer(int id) {
		customersRepository.deleteById(id);
		
	}

	@Override
	public Customers getCustByEmailPass(String email, String pass) {
		return customersRepository.getUserByEmailIdAndPass(email, pass);
	}
}
