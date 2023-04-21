import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom"; 
import * as service from "../../../../services/inventoryService";


const addInventoryForm = () => {
    const [Inventory, setInventory] = useState({
			"itemCode": 0,
			"itemName": "",
			"quantity": 0,
			"dosage": ""
		})


	const handleOnChange = (event) => {
		setInventory({ ...Inventory, [event.currentTarget.name]: event.currentTarget.value })
	}

    const handleAddSubmit = (event)=>{
        event.preventDefault()
        service.addItem(Inventory)
        window.location.reload()
	}

    const reset = () => {
        window.location.reload()
    }


  return (
    <>
    <div className="table-action">
        <Link to="#" className="add-new-btn text-center" data-bs-toggle="modal" data-bs-target="#inventory">
            <i className="fa fa-plus"></i> Add item
        </Link>
    </div>



    <div className="modal fade custom-modal" id="inventory" onClick={()=>reset()}>
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={e => {e.stopPropagation();}}>
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title">Add Item</h3>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>reset()}><span aria-hidden="true">&times;</span></button>
						</div>
						
						<form onSubmit={handleAddSubmit}>
							<div className="modal-body">
								<div className="form-group">
									<label>Item code</label>
									<input type="text" className="form-control" name="itemCode" value={Inventory.itemCode} onChange={(e)=>handleOnChange(e)}/>
								</div>
								<div className="form-group">
									<label>Item name</label>
									<input type="text" className="form-control" name="itemName" value={Inventory.itemName} onChange={(e)=>handleOnChange(e)}/>
								</div>
								<div className="form-group">
									<label>Dosage</label>
									<input type="text" className="form-control" name="dosage" value={Inventory.dosage}  onChange={(e)=>handleOnChange(e)}/>
								</div>
								<div className="form-group">
									<label>Quantity</label>
									<input type="text" className="form-control" name="quantity" value={+Inventory.quantity} onChange={(e)=>handleOnChange(e)} />
								</div>
								
								<button type="submit" className="btn btn-primary">Submit</button>
							</div>
						</form>		
					</div>
				</div>
			</div>
        </>
  )
}

export default addInventoryForm