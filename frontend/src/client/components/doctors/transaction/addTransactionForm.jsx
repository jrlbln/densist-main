import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom"; 
import * as service from "../../../../services/transactionService";
import { getAllPatients } from '../../../../services/userServices';



const getFilteredItems = (query, items) => {
	if (!query) {
	  return items;
	}
	return items.filter((data) =>
	  data.firstName.toLowerCase().includes(query.toLowerCase()) ||
	  data.middleName.toLowerCase().includes(query.toLowerCase()) ||
	  data.lastName.toLowerCase().includes(query.toLowerCase())
	);
};

const AddTransactionForm = () => {
    const [transac, setTransac] = useState({
        "service":"",
        "charge": 0,
        "status": "selected"
    })
	const [patients, setPatients] = useState([])
	const [data, setData] = useState()


	useEffect(()=>{
		getAll()
	},[])

	const handleOnChange = (event) => {
		setTransac({ ...transac, [event.currentTarget.name]: event.currentTarget.value })
	}

	const getAll =()=>{
		getAllPatients().then((res)=>{
			if(res && res.data){
				setPatients(res.data)
			}
		})		
	}

    const handleAddSubmit = (event)=>{
        event.preventDefault()
        service.addTransaction(transac,data.id)
        window.location.reload()
	}

    const reset = () => {
        window.location.reload()
    }
	const [query, setQuery] = useState('');
	const [show, setShow] = useState(true);
	const [prevCount, setprevCount] = useState();
  
	const filteredItems = getFilteredItems(query, patients);

    // console.log(filteredItems);

  return (
    <>
    <div className="table-action">
        <Link to="#" className="add-new-btn text-center" data-bs-toggle="modal" data-bs-target="#transactions">
            <i className="fa fa-plus"></i> Add transactions
        </Link>
    </div>



    <div className="modal fade custom-modal" id="transactions" onClick={()=>reset()}>
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={e => {e.stopPropagation();}}>
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title">Add transaction</h3>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>reset()}><span aria-hidden="true">&times;</span></button>
						</div>
						<div className="card">
							<div className="card-body">
								<div className="form-group mb-0 row">
													<label className="col-form-label col-md-6">
														{
															data != undefined ? (
																<div className="">{data.firstName} {data.middleName} {data.lastName} is selected</div>
															):(
																<div className=""></div>
															)
														}
													</label>
													<div className="col-md-6">
														<div className="input-group">
															<input 
																className="form-control"
																type="text"
																onChange={(e) => {
																const value = e.target.value;
																setQuery(value);
																console.log(value.length);
																setprevCount(value.length);
																if (
																	value === null ||
																	value === "" ||
																	prevCount < value.length ||
																	prevCount > value.length
																) {
																	setShow(true);
																}
																}}
															 />
															<div className="input-group-append">
																<button
																	className="btn btn-primary"
																	type="button"
																	style={{lineHeight: '2'}}
																	onClick={() => setShow(false)}
																>
																	Search patient
																</button>
															</div>
														</div>
													</div>
								</div>
								<div hidden={show} className="card-body">
								{filteredItems.map((value) => (
									<div className="alert alert-info alert-dismissible fade show"
										role="alert" key={value.id}>
											<div className="row align-items-center">
												<div className="col ml-md-n2 profile-user-info">
													<h4 className="user-name mb-0">{value.firstName} {value.middleName} {value.lastName}</h4>
													<h6 className="text-muted">{value.email}</h6>
													</div>
											</div>
										<button
											type="button"
											className="btn-close "
											data-bs-dismiss="alert"
											aria-label="Close"
											onClick={ ()=>{setData(value);setShow(true);}}> 
											<i class="fa fa-check " style={{
												backgroundColor:'#cff4fc',
												width: '1em',
												height: '1em',
												padding: '0.25em 0.25em',
											}} aria-hidden="true"></i>
										</button>
									</div>
									
								))}
								</div>
							</div>
						</div>
					
						<form onSubmit={handleAddSubmit}>
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
									<div className="col-lg-3">
														<select className="form-select form-control"  name="status" value={transac.status} onChange={(e)=>handleOnChange(e)}>
															<option value="selected" disabled>Select</option>
															<option value="Done">Done</option>
															<option value="Follow up">Follow up</option>
														</select>
										</div>
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

export default AddTransactionForm