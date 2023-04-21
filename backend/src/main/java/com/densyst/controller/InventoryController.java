package com.densyst.controller;

import java.net.URISyntaxException;
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
import com.densyst.models.Inventory;
import com.densyst.models.Transactions;
import com.densyst.repo.InventoryRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3006/")
@RequestMapping("api/inventory/")
public class InventoryController {
		@Autowired
		private InventoryRepository inventoryRepo;
		
///////////////////////////////////////////////////////////////////GET   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\		
		
		@GetMapping("all")
		public ResponseEntity<ResponseModel> getAllTransactions() {
			List<Inventory> inventory = inventoryRepo.findAll();
			return ResponseEntity.ok().body(new ResponseModel(1,"Get All",inventory));
			}
		
		
		@GetMapping("item/{id}")
		public ResponseEntity<ResponseModel> getInventory(@PathVariable Long id) {
			Optional<Inventory> inventory = inventoryRepo.findById(id);
			return ResponseEntity.ok().body(new ResponseModel(1,"Get All",inventory.get()));
		}
		
		
		
		
//////////////////////////////////////////////////////////////////////POST   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		@PostMapping("add")
		public ResponseEntity<ResponseModel> addItem(@RequestBody Inventory model) {
			Inventory save= inventoryRepo.save(model);
	    return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",save));
		}
		
		
//////////////////////////////////////////////////////////////////////PATCH   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\		
		@PatchMapping("edit/{id}")
		public ResponseEntity<ResponseModel> updateQuantity(@PathVariable("id") Long id, @RequestBody Inventory inventory)
				throws URISyntaxException
		{
			Optional<Inventory> inventoryExist = inventoryRepo.findById(id);
			if (inventoryExist.isEmpty()){
				 return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
			}
			else {
				inventoryExist.get().setItemCode(inventory.getItemCode());
				inventoryExist.get().setItemName(inventory.getItemName());
				inventoryExist.get().setQuantity(inventory.getQuantity());
				inventoryExist.get().setDosage(inventory.getDosage());
				inventoryExist.get().setActive(inventory.getActive());
				Inventory save =inventoryRepo.save(inventoryExist.get());
				return ResponseEntity.ok().body(new ResponseModel(1, "Update Successfully", null, save));
			}
		}
		

		@PatchMapping("activate/{id}")
		public ResponseEntity<ResponseModel> activate(@PathVariable("id") Long id)
				throws URISyntaxException
		{
			Optional<Inventory> inventoryExist = inventoryRepo.findById(id);
			if (inventoryExist.isEmpty()){
				 return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
			}
			else {
				inventoryExist.get().setActive(true);
				Inventory save =inventoryRepo.save(inventoryExist.get());
				return ResponseEntity.ok().body(new ResponseModel(1, "Update Successfully", null, save));
			}
		}
		
	}
