package com.densyst.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.densyst.models.Schedule;
import com.densyst.models.ScheduleTimeSlots;

public interface ScheduleTimeSlotsRepository extends JpaRepository<ScheduleTimeSlots, Long> {
	@Query(nativeQuery = true,value = "SELECT * FROM schedule_time_slots where id =?1")
	ScheduleTimeSlots findTimeSlot(Long id);

}
