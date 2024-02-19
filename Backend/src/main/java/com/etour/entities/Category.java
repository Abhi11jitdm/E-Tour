package com.etour.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;


@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int category_id;
	private String category_name;
	private String category_image_path;
	private String category_info;
	
	@Column(nullable = true)
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name = "category_id" , referencedColumnName = "category_id")
	private Set<SubCategory> subcategory;
	
	@Column(nullable = true)
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name = "category_id" , referencedColumnName = "category_id")
	private Set<Packages> packages;

	
	public Set<Packages> getPackages() {
		return packages;
	}

	public void setPackages(Set<Packages> packages) {
		this.packages = packages;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public String getCategory_image_path() {
		return category_image_path;
	}

	public void setCategory_image_path(String category_image_path) {
		this.category_image_path = category_image_path;
	}

	public String getCategory_info() {
		return category_info;
	}

	public void setCategory_info(String category_info) {
		this.category_info = category_info;
	}

	public Set<SubCategory> getSubcategory() {
		return subcategory;
	}

	public void setSubcategory(Set<SubCategory> subcategory) {
		this.subcategory = subcategory;
	}

	public Category(int category_id, String category_name, String category_image_path, String category_info,
			Set<SubCategory> subcategory) {
		super();
		this.category_id = category_id;
		this.category_name = category_name;
		this.category_image_path = category_image_path;
		this.category_info = category_info;
		this.subcategory = subcategory;
	}
	

	public Category() {
		super();
	}

	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", category_name=" + category_name + ", category_image_path="
				+ category_image_path + ", category_info=" + category_info + ", subcategory=" + subcategory + "]";
	}
	
	
}
