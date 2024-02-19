package com.example.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.etour.*")
@EntityScan(basePackages = "com.etour.*")
@EnableJpaRepositories(basePackages = "com.etour.*")
@ComponentScan(basePackages = "com.etour.*")
public class ETourStarterApplication {

	public static void main(String[] args) {
		SpringApplication.run(ETourStarterApplication.class, args);
	}
}