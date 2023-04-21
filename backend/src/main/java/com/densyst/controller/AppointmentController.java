package com.densyst.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.densyst.dto.ResponseModel;
import com.densyst.models.Appointment;
import com.densyst.models.Inventory;
import com.densyst.models.Users;
import com.densyst.repo.AppointmentRepository;
import com.densyst.repo.UserRepository;

@RestController
@RequestMapping("api/appointment/")
@CrossOrigin(origins = "http://localhost:3006/")
public class AppointmentController {
	@Autowired
	private AppointmentRepository appRepo;
	
	@Autowired 
	private UserRepository userRepo;
	
//////////////////////////////////////////////////////////////////////GET   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		@GetMapping("all")
		public ResponseEntity<ResponseModel>  getAllAppointments(){
			List<Appointment> appointment= appRepo.findAll();
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",appointment));
		}
		
		
		@GetMapping("getAppointment/{id}")
		public ResponseEntity<ResponseModel> getAppointment(@PathVariable Long id) {
			Optional<Appointment> appointment = appRepo.findById(id);
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",appointment.get()));
		}
		
		
		@GetMapping("{status}")
		public ResponseEntity<ResponseModel>  getStatus(@PathVariable String status){
			List<Appointment> appointment = appRepo.getStatus(status);
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",appointment));
		}
	
		@GetMapping("user/{id}")
		public ResponseEntity<ResponseModel> getInventorybyUser(@PathVariable Long id) {
			List<Appointment> appointment = appRepo.getAllAppointmentbyUserId(id);
			return ResponseEntity.ok().body(new ResponseModel(1,"Get All",appointment));
		}
	
	
	
	
	


//////////////////////////////////////////////////////////////////////POST   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		@PostMapping("add/patient/{id}")
		public ResponseEntity<ResponseModel> addAnAppointment(@RequestBody Appointment model, @PathVariable Long id){
			Optional<Users> getUser = userRepo.findById(id);
			model.setUser(getUser.get());
			model.setStatus("Pending");
			Appointment save= appRepo.save(model);
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",save));
		}






















//////////////////////////////////////////////////////////////////////PATCH   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		@PatchMapping("approve/patient/{id}")
		public ResponseEntity<ResponseModel> approveAppointment(@PathVariable Long id) {
		    Optional<Appointment> appointment = appRepo.findById(id);
		    if (appointment.isPresent()) {
		        Appointment oldAppointment = appointment.get();
		        oldAppointment.setStatus("Approved");
		        Appointment updatedAppointment = appRepo.save(oldAppointment);
		        return ResponseEntity.ok().body(new ResponseModel(1, "Appointment approved successfully", updatedAppointment));
		    } else {
		        return ResponseEntity.badRequest().body(new ResponseModel(0, "Appointment not found"));
		    }
		}
		
		@PatchMapping("decline/patient/{id}")
		public ResponseEntity<ResponseModel> declineAppointment(@PathVariable Long id) {
		    Optional<Appointment> appointment = appRepo.findById(id);
		    if (appointment.isPresent()) {
		        Appointment oldAppointment = appointment.get();
		        oldAppointment.setStatus("Declined");
		        Appointment updatedAppointment = appRepo.save(oldAppointment);
		        return ResponseEntity.ok().body(new ResponseModel(1,"Appointment was decline",updatedAppointment));
		    } else {
		        return ResponseEntity.badRequest().body(new ResponseModel(0,"Appointment Not Found"));
		    }
		}

















//////////////////////////////////////////////////////////////////////DELETE   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\













	
	
	
	
	
	
}
