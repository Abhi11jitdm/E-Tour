package com.etour.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etour.entities.SubCategory;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface SubCategoryRepository extends JpaRepository<SubCategory, Integer> {

}
