package com.densyst.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.densyst.models.Transactions;

public interface TransactionRepository extends JpaRepository<Transactions, Long> {
	@Query(nativeQuery = true, value = "SELECT * FROM transactions WHERE user_id = ?1")
	public List<Transactions> getAllTransactionsbyId(Long id);
	
	
	@Query(nativeQuery = true, value = "SELECT * FROM transactions WHERE id = ?1")
	public Transactions getByTransactionId(Long id);
	
	@Query(nativeQuery = true, value = "SELECT * FROM transactions WHERE is_requested = true")
	public List<Transactions> getRequestedRecords();
	
	
	@Query(nativeQuery = true, value = "SELECT * FROM transactions WHERE is_requested = true AND user_id =?1")
	public List<Transactions> getApprovedRequest(Long id);
}
