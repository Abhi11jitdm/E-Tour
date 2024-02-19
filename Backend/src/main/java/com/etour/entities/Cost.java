package com.etour.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cost {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cost_id;
	private double child_with_bed;
	private double child_without_bed;
	private double cost;
	private double extra_person_cost;
	private int package_id;
	private double single_person_cost;
	private double twin_sharing;
	private String valid_from;
	private String valid_to;
	
	public int getCost_id() {
		return cost_id;
	}
	public void setCost_id(int cost_id) {
		this.cost_id = cost_id;
	}
	public double getChild_with_bed() {
		return child_with_bed;
	}
	public void setChild_with_bed(double child_with_bed) {
		this.child_with_bed = child_with_bed;
	}
	public double getChild_without_bed() {
		return child_without_bed;
	}
	public void setChild_without_bed(double child_without_bed) {
		this.child_without_bed = child_without_bed;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public double getExtra_person_cost() {
		return extra_person_cost;
	}
	public void setExtra_person_cost(double extra_person_cost) {
		this.extra_person_cost = extra_person_cost;
	}
	public int getPackage_id() {
		return package_id;
	}
	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}
	public double getSingle_person_cost() {
		return single_person_cost;
	}
	public void setSingle_person_cost(double single_person_cost) {
		this.single_person_cost = single_person_cost;
	}
	public double getTwin_sharing() {
		return twin_sharing;
	}
	public void setTwin_sharing(double twin_sharing) {
		this.twin_sharing = twin_sharing;
	}
	public String getValid_from() {
		return valid_from;
	}
	public void setValid_from(String valid_from) {
		this.valid_from = valid_from;
	}
	public String getValid_to() {
		return valid_to;
	}
	public void setValid_to(String valid_to) {
		this.valid_to = valid_to;
	}
	public Cost(int cost_id, double child_with_bed, double child_without_bed, double cost, double extra_person_cost,
			int package_id, double single_person_cost, double twin_sharing, String valid_from, String valid_to) {
		super();
		this.cost_id = cost_id;
		this.child_with_bed = child_with_bed;
		this.child_without_bed = child_without_bed;
		this.cost = cost;
		this.extra_person_cost = extra_person_cost;
		this.package_id = package_id;
		this.single_person_cost = single_person_cost;
		this.twin_sharing = twin_sharing;
		this.valid_from = valid_from;
		this.valid_to = valid_to;
	}
	public Cost() {
		super();
	}
	@Override
	public String toString() {
		return "Cost [cost_id=" + cost_id + ", child_with_bed=" + child_with_bed + ", child_without_bed="
				+ child_without_bed + ", cost=" + cost + ", extra_person_cost=" + extra_person_cost + ", package_id="
				+ package_id + ", single_person_cost=" + single_person_cost + ", twin_sharing=" + twin_sharing
				+ ", valid_from=" + valid_from + ", valid_to=" + valid_to + "]";
	}
	
	
	
	
	
	
}
