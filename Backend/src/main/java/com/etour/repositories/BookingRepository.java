package com.etour.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etour.entities.Booking;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface BookingRepository extends JpaRepository<Booking, Integer> {

}
