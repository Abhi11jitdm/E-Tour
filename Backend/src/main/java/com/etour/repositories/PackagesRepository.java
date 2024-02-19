package com.etour.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etour.entities.Packages;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface PackagesRepository extends JpaRepository<Packages, Integer> {
	
}
