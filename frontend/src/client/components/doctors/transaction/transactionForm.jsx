import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom"; 
import * as service from "../../../../services/transactionService";


const TransactionForm = ({data, active}) => {
	if(active === true && data != undefined){
		const [transac, setTransac] = useState(data)
		const handleOnChange = (event) => {
			setTransac({ ...transac, [event.currentTarget.name]: event.currentTarget.value })
		}
	
		const handleEditSubmit = (event)=>{
			event.preventDefault()
			service.editTransaction(transac)
			window.location.reload()
		}
	  return (
		<>
							<form onSubmit={handleEditSubmit}>
								<div className="modal-body">
									<div className="form-group">
										<label>Service</label>
										<input type="text" className="form-control" name="service" value={transac.service} onChange={(e)=>handleOnChange(e)}/>
									</div>
									<div className="form-group">
										<label>Charge</label>
										<input type="text" className="form-control" name="charge" value={+transac.charge}  onChange={(e)=>handleOnChange(e)}/>
									</div>
									<div className="form-group">
										<label>Status</label>
										<div className="col-lg-9">
															<select className="form-select form-control"  name="status" value={transac.status} onChange={(e)=>handleOnChange(e)}>
																<option value="selected" disabled >Select</option>
																<option value="Done">Done</option>
																<option value="Follow up">Follow up</option>
															</select>
											</div>
									</div>
									<button type="submit" className="btn btn-primary">Submit</button>
									
								</div>
							</form>
						
			</>
	  )
	}else{
		return(
			<div className=""></div>
		)
	}

}

export default TransactionForm