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
import com.densyst.models.Schedule;
import com.densyst.models.ScheduleTimeSlots;
import com.densyst.models.Users;
import com.densyst.repo.ScheduleRepository;
import com.densyst.repo.ScheduleTimeSlotsRepository;
import com.densyst.repo.UserRepository;

@RestController
@RequestMapping("api/schedule/")
@CrossOrigin(origins = "http://localhost:3006/")
public class ScheduleController {
	@Autowired
	private ScheduleRepository schedRepo;
	
	@Autowired
	private ScheduleTimeSlotsRepository schedTimeRepo;
	
	@Autowired 
	private UserRepository userRepo;
	
	
	
//////////////////////////////////////////////////////////////////////GET   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@GetMapping("all")
	public ResponseEntity<ResponseModel>  getAllSchedule(){
		List<Schedule> schedule= schedRepo.findAll();
		return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",schedule));
	}
	
	
	@GetMapping("user/{id}")
	public ResponseEntity<ResponseModel>  getSchedule(@PathVariable Long id){
		Optional<Schedule> schedule=Optional.ofNullable(schedRepo.findUser(id));
		if(schedule.isPresent()) {
			return ResponseEntity.ok().body(new ResponseModel(1,"Schedule",schedule.get()));
		}
		return ResponseEntity.ok().body(new ResponseModel(1,"Schedule",null));
	}
	
	@GetMapping("timeslot/{id}")
	public ResponseEntity<ResponseModel>  getTimeslots(@PathVariable Long id){
		Optional<ScheduleTimeSlots> timeslots=Optional.ofNullable(schedTimeRepo.findTimeSlot(id));
		if(timeslots.isPresent()) {
			return ResponseEntity.ok().body(new ResponseModel(1,"Schedule",timeslots.get()));
		}
		return ResponseEntity.ok().body(new ResponseModel(1,"Schedule",null));
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


//////////////////////////////////////////////////////////////////////POST   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@PostMapping("add/user/{id}")
	public ResponseEntity<ResponseModel> addSchedule(@RequestBody Schedule model, @PathVariable Long id){
		Optional<Users> getUser = userRepo.findById(id);
		
		if(		model.getMonday() == null && 
				model.getTuesday() == null && 
				model.getWednesday() == null && 
				model.getThursday() == null && 
				model.getFriday() == null && 
				model.getSaturday() == null && 
				model.getSunday() == null) {
			ScheduleTimeSlots slots1 = new ScheduleTimeSlots();
			ScheduleTimeSlots slots2 = new ScheduleTimeSlots();
			ScheduleTimeSlots slots3 = new ScheduleTimeSlots();
			ScheduleTimeSlots slots4 = new ScheduleTimeSlots();
			ScheduleTimeSlots slots5 = new ScheduleTimeSlots();
			ScheduleTimeSlots slots6 = new ScheduleTimeSlots();
			ScheduleTimeSlots slots7 = new ScheduleTimeSlots();
			Schedule sched = new Schedule(slots1,slots2,slots3,slots4,slots5,slots6,slots7,getUser.get());
			schedRepo.save(sched);
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",sched));
		}else {
			model.setUser(getUser.get());
			schedRepo.save(model);
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",model));
		}
	}





















//////////////////////////////////////////////////////////////////////PATCH   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	@PatchMapping("edit/timeslots/{id}")
	public ResponseEntity<ResponseModel> editTimeslots(@RequestBody ScheduleTimeSlots model, @PathVariable Long id){
		Optional<ScheduleTimeSlots> findTimeSlot = Optional.ofNullable(schedTimeRepo.findTimeSlot(id));
		if (findTimeSlot.isPresent()) {
			findTimeSlot.get().setTime08_00am(model.getTime08_00am());
			findTimeSlot.get().setTime09_00am(model.getTime09_00am());
			findTimeSlot.get().setTime10_00am(model.getTime10_00am());
			findTimeSlot.get().setTime11_00am(model.getTime11_00am());
			findTimeSlot.get().setTime12_00pm(model.getTime12_00pm());
			findTimeSlot.get().setTime01_00pm(model.getTime01_00pm());
			findTimeSlot.get().setTime02_00pm(model.getTime02_00pm());
			findTimeSlot.get().setTime03_00pm(model.getTime03_00pm());
			findTimeSlot.get().setTime04_00pm(model.getTime04_00pm());
			findTimeSlot.get().setTime05_00pm(model.getTime05_00pm());
			findTimeSlot.get().setTime06_00pm(model.getTime06_00pm());
			findTimeSlot.get().setTime07_00pm(model.getTime07_00pm());
			findTimeSlot.get().setTime08_00pm(model.getTime08_00pm());
			ScheduleTimeSlots updated= schedTimeRepo.save(findTimeSlot.get());
	        return ResponseEntity.ok().body(new ResponseModel(1,"Appointment was updated",updated));
	    } else {
	        return ResponseEntity.badRequest().body(new ResponseModel(0,"Timeslot Not Found"));
	    }
	}


















//////////////////////////////////////////////////////////////////////DELETE   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\














}
