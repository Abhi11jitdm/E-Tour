package com.etour.repositories;
import com.etour.entities.Date;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface DateRepository extends JpaRepository<Date, Integer> {

}
