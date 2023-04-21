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
import com.densyst.models.Transactions;
import com.densyst.models.Users;
import com.densyst.repo.TransactionRepository;
import com.densyst.repo.UserRepository;


@RestController
@RequestMapping("api/transactions/")
@CrossOrigin(origins = "http://localhost:3006/")
public class TransactionController {
	
	
	@Autowired
	private TransactionRepository transacRepo;
	
	@Autowired
	private UserRepository userRepo;
	
////////////////////////////////////////////////////////////////////// GET   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@GetMapping("all")
	public ResponseEntity<ResponseModel> getAllTransactions() {
		List<Transactions> transaction = transacRepo.findAll();
		return ResponseEntity.ok().body(new ResponseModel(1,"Get All",transaction));
		}
	
	
	@GetMapping("getTransaction/{id}")
	public ResponseEntity<ResponseModel> getTransaction(@PathVariable Long id) {
		Optional<Transactions> transaction = transacRepo.findById(id);
		
		return ResponseEntity.ok().body(new ResponseModel(1,"Get All", transaction.get())); 
	}
	
	
	@GetMapping("requestedrecords")
	public ResponseEntity<ResponseModel> getRequestedRecords() {
		List<Transactions> transaction = transacRepo.getRequestedRecords();
		return ResponseEntity.ok().body(new ResponseModel(1,"Get All", transaction)); 
	}
	
	
	@GetMapping("requestrecordapproved/{id}")
	public ResponseEntity<ResponseModel> getApprovedRequest(@PathVariable Long id) {
		List<Transactions> transaction = transacRepo.getApprovedRequest(id);
		return ResponseEntity.ok().body(new ResponseModel(1,"Get All", transaction)); 
	}
	
	
	@GetMapping("getpatients/{id}")
	public  ResponseEntity<ResponseModel> getPatients(@PathVariable Long id) {
		List<Transactions> transaction = transacRepo.getAllTransactionsbyId(id);
		return ResponseEntity.ok().body(new ResponseModel(1,"Get All", transaction));
	}
	
	



//////////////////////////////////////////////////////////////////////POST   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@PostMapping("patient/add/{id}")
	public ResponseEntity<ResponseModel> addTransactions(@RequestBody Transactions model, @PathVariable Long id){
		Optional<Users> getUser = userRepo.findById(id);
		model.setUser(getUser.get());
		Transactions save = transacRepo.save(model);
		return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",save));
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//////////////////////////////////////////////////////////////////////PATCH   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	

	@PatchMapping("patient/edit/{id}")
	public ResponseEntity<ResponseModel> editTransactions(@RequestBody Transactions model, @PathVariable Long id){
		Transactions getTransactions = transacRepo.getByTransactionId(id);
		getTransactions.setService(model.getService());
		getTransactions.setCharge(model.getCharge());
		getTransactions.setStatus(model.getStatus());
		Transactions save = transacRepo.save(getTransactions);
		return ResponseEntity.ok().body(new ResponseModel(1,"Edit Successfully",save));
	}
	
	@PatchMapping("reject/requestedrecord/{id}")
	public ResponseEntity<ResponseModel> rejectRequest(@PathVariable Long id){
		Transactions getTransactions = transacRepo.getByTransactionId(id);
		getTransactions.setStatus("Reject");
		Transactions save = transacRepo.save(getTransactions);
		return ResponseEntity.ok().body(new ResponseModel(1,"Edit Successfully",save));
	}
	
	
	
	@PatchMapping("patient/request/{id}")
	public ResponseEntity<ResponseModel> requestRecord(@PathVariable Long id){
		Transactions getTransactions = transacRepo.getByTransactionId(id);
		getTransactions.setIsRequested(true);
		Transactions save = transacRepo.save(getTransactions);
		return ResponseEntity.ok().body(new ResponseModel(1,"Edit Successfully",save));
	}
	
	
	
	@PatchMapping("patient/approverequest/{id}")
	public ResponseEntity<ResponseModel> approveRequestRecord(@PathVariable Long id){
		Transactions getTransactions = transacRepo.getByTransactionId(id);
		getTransactions.setIsApprove(true);
		Transactions save = transacRepo.save(getTransactions);
		return ResponseEntity.ok().body(new ResponseModel(1,"Edit Successfully",save));
	}
	
	
	
	
	
	
	
	
	
	
}


