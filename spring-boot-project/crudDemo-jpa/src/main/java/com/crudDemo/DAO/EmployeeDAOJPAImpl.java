package com.crudDemo.DAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crudDemo.entity.Employee;
@Repository
public class EmployeeDAOJPAImpl implements EmployeeDAO{
    @Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Employee> findAll() {
		Query theQuery=entityManager.createQuery("from Employee");
		List<Employee> theEmployees=theQuery.getResultList();
		return theEmployees;
	}

	@Override
	public Employee findById(int theId) {
	   Employee theEmployee= entityManager.find(Employee.class,theId);
		return theEmployee;
	}

	@Override
	public void save(Employee theEmployee) {
		
		Employee  dbEmployee=entityManager.merge(theEmployee);
		dbEmployee.setId(dbEmployee.getId());
	}

	@Override
	public void deleteById(int theId) {
		Query theQuery=entityManager.createQuery("delete from Employee where id=:employeeId");
		theQuery.setParameter("employeeId",theId);
		theQuery.executeUpdate();
		
	}
 


}
