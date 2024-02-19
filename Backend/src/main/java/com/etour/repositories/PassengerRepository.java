package com.etour.repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.etour.entities.Passenger;

@Repository
@Transactional
public interface PassengerRepository extends JpaRepository<Passenger,Integer>
{
	@Query( value ="select * from passenger where customer_id = :id", nativeQuery = true )
	public List< Passenger > getinfo(@Param("id") int id);
//	@Query(value = "select mobile,password from customer where mobile = :mobile and password = :password", nativeQuery = true)
//	List<String> findByuserName(@Param("mobile") String mobile, @Param("password") String password);
}