package com.crudDemo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudDemo.entity.Employee;
import com.crudDemo.service.EmployeeService;

@RestController
@CrossOrigin("htpp://localhost:3000")
public class EmployeeRestController {
    
	private EmployeeService employeeService;
	//inject employee dao
	@Autowired
	public EmployeeRestController(EmployeeService theEmployeeService ) {
		employeeService=theEmployeeService;
	}
	//expose "/employees" and return list of employees
	@GetMapping("/getEmployees")
	public List<Employee> findAll(){
		return employeeService.findAll();
	}
	
	//add mapping for GET /employees/{employeeId}
	@GetMapping("/Employee/{employeeId}")
	public Employee getEmployee(@PathVariable int employeeId) {
		Employee theEmployee=employeeService.findById(employeeId);
		if(theEmployee == null) {
			throw new RuntimeException("Employee Id not found - :"+employeeId);
			
		}
		return theEmployee;
	}
	@PostMapping("/addEmployee")
	public Employee addEmployee(@RequestBody Employee theEmployee) {
		
		theEmployee.setId(0);
		employeeService.save(theEmployee);
		return theEmployee;
	}
	@PutMapping("/updateEmployee/{id}")
	public Employee updateEmployee(@RequestBody Employee theEmployee,@PathVariable  String id) {
		 Employee emp =employeeService.findById(Integer.parseInt(id));
			
					emp.setFirstName(theEmployee.getFirstName());
					emp.setLastName(theEmployee.getLastName());
					emp.setEmail(theEmployee.getEmail());
					employeeService.save(emp);
		return emp;
		
	}
	@DeleteMapping("/delete/{employeeId}")
	public String deleteEmployee(@PathVariable String employeeId) {
		
		Employee theEmployee=employeeService.findById(Integer.parseInt(employeeId));
		//throw exception if null
		if(theEmployee == null) {
			throw new RuntimeException("Employee id not found "+employeeId);
			
		}
		employeeService.deleteById(Integer.parseInt(employeeId));
		return "Deleted employee id "+employeeId;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
