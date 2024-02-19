package com.etour.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etour.entities.Iternary;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface IternaryRepository extends JpaRepository<Iternary, Integer>{

}
