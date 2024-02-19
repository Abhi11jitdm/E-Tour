//package com.etour.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.*;
//
//import com.etour.entities.Customers;
//import com.etour.services.CustomerService;
//
//@RestController
//@CrossOrigin("*")
//public class CustomersController  {
//	@Autowired
//	CustomerService customerService;
//		
//	@GetMapping("/api/customers")
//	public List<Customers> getAllCustomers(){
//		List<Customers> ls = customerService.getcustomers();
//		return ls;
//	}
//	
//	@GetMapping("/api/customer/{id}")
//	public Optional<Customers> getAllCustomerById(@PathVariable int id){
//		Optional<Customers> ls = customerService.getcustomerbyid(id);
//		return ls;
//	}
//
//	@GetMapping("/api/customer/{emailId}/{password}")
//	public Customers getCustomerByEmailPass(@PathVariable String emailId, @PathVariable String password) {
//		return customerService.getCustByEmailPass(emailId, password);
//	}
//	
//	@PostMapping("/api/customer")
//	public void addCustomer(@RequestBody Customers customer)  {
//		customerService.addCustomer(customer);
//	}
//	
//	@DeleteMapping("/api/customer/{id}")
//	public void removeCustomer(@PathVariable int id) {
//		customerService.deleteCustomer(id);
//	}
//}

package com.etour.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.*;
import com.etour.entities.Customers;
import com.etour.services.CustomerService;

@RestController
@CrossOrigin("*")
public class CustomersController  {
    @Autowired
    CustomerService customerService;
        
    @GetMapping("/api/customers")
    public List<Customers> getAllCustomers(){
        List<Customers> ls = customerService.getcustomers();
        return ls;
    }
    
    @GetMapping("/api/customer/{id}")
    public ResponseEntity<Customers> getCustomerById(@PathVariable int id){
        Optional<Customers> customer = customerService.getcustomerbyid(id);
        return customer.map(c -> ResponseEntity.ok().body(c))
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/api/customer/{emailId}/{password}")
    public ResponseEntity<Customers> getCustomerByEmailPass(@PathVariable String emailId, @PathVariable String password) {
        Customers customer = customerService.getCustByEmailPass(emailId, password);
        return customer != null ? ResponseEntity.ok().body(customer) : ResponseEntity.notFound().build();
    }
    
    @PostMapping("/api/customer")
    public ResponseEntity<String> addCustomer(@RequestBody Customers customer)  {
        try {
            customerService.addCustomer(customer);
            return ResponseEntity.status(HttpStatus.CREATED).body("Customer added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Duplicate entry: " + e.getMessage());
        } 
    }
    
    @DeleteMapping("/api/customer/{id}")
    public ResponseEntity<String> removeCustomer(@PathVariable int id) {
        try {
            customerService.deleteCustomer(id);
            return ResponseEntity.ok().body("Customer deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete customer");
        }
    }
}

