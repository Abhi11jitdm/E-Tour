package com.etour.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.etour.entities.Customers;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface CustomersRepository extends JpaRepository<Customers, Integer> {
	
	@Query(value = "select * from customers where email = :emailId and password = :password", nativeQuery = true)
	public Customers getUserByEmailIdAndPass(@Param("emailId") String emailId, @Param("password") String password);
}
