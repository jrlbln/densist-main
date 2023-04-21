import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom"; 
import * as service from "../../../../services/inventoryService";


const InventoryForm = ({data, active}) => {
	if(active === true && data != undefined){
		const [Inventory, setInvent] = useState(data)
		const handleOnChange = (event) => {
			setInvent({ ...Inventory, [event.currentTarget.name]: event.currentTarget.value })
		}
	
		const handleEditSubmit = (event)=>{
			event.preventDefault()
			service.editInventory(Inventory)
			window.location.reload()
		}

		// console.log(Inventory)

	  return (
		<>
			<form onSubmit={handleEditSubmit}>
				<div className="modal-body">
					<div className="form-group">
						<label>Item code</label>
						<input type="text" className="form-control" name="itemCode" value={Inventory.itemCode} onChange={(e)=>handleOnChange(e)} disabled/>
					</div>
					<div className="form-group">
						<label>Item name</label>
						<input type="text" className="form-control" name="itemName" value={Inventory.itemName} onChange={(e)=>handleOnChange(e)} disabled/>
					</div>
					<div className="form-group">
						<label>Dosage</label>
						<input type="text" className="form-control" name="dosage" value={Inventory.dosage}  onChange={(e)=>handleOnChange(e)} disabled/>
					</div>
					<div className="form-group">
						<label>Quantity</label>
						<input type="text" className="form-control" name="quantity" value={+Inventory.quantity} onChange={(e)=>handleOnChange(e)} />
					</div>
					<div className="form-group">
						<label>Active</label>
						<div className="col-lg-9">
							<select className="form-select form-control"  name="active" value={Inventory.active} onChange={(e)=>handleOnChange(e)}>
								<option value="selected" disabled >Select</option>
								<option value="true">Active</option>
								<option value="false">Inactive</option>
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

export default InventoryForm