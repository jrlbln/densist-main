import React,{useState, useEffect} from 'react'
import * as service from '../../../../services/appointmentService';
import { getUserInfo } from '../../../../services/auth';
import { Link } from "react-router-dom"; 

const AddAppointmentForm = () => {
	const [appointment, setAppointment] = useState({
        "service":"selected",
        "dateTime":"2023-03-21T03:22:00.000Z"
    })

	const handleOnChange = (event) => {
		setAppointment({ ...appointment, [event.currentTarget.name]: event.currentTarget.value })
	}

    const handleAddSubmit = (event)=>{
        event.preventDefault()
        service.addAppointment(getUserInfo().id,appointment)
        window.location.reload()
	}

    const reset = () => {
        window.location.reload()
    }
	console.log(appointment)

  return (
   <>
    <div className="table-action">
        <Link to="#" className="add-new-btn text-center" data-bs-toggle="modal" data-bs-target="#appointment">
            <i className="fa fa-book"></i> Set an appointment
        </Link>
    </div>



    <div className="modal fade custom-modal" id="appointment" onClick={()=>reset()}>
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={e => {e.stopPropagation();}}>
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title">Set appointment</h3>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>reset()}><span aria-hidden="true">&times;</span></button>
						</div>
						
					
						<form onSubmit={handleAddSubmit}>
							<div className="modal-body">
								{/* <div className="form-group">
									<label>Service</label>
									<input type="text" className="form-control" name="service" value={transac.service} onChange={(e)=>handleOnChange(e)}/>
								</div>
								<div className="form-group">
									<label>Charge</label>
									<input type="text" className="form-control" name="charge" value={+transac.charge}  onChange={(e)=>handleOnChange(e)}/>
								</div> */}
								<div className="form-group">
									<label>Status</label>
									<div className="col-lg-3">
										<select className="form-select form-control"  name="service" value={appointment.service} onChange={(e)=>handleOnChange(e)}>
											<option value="selected" disabled>Select</option>
											<option value="Cleaning">Cleaning</option>
											<option value="X-ray">X-ray</option>
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

export default AddAppointmentForm