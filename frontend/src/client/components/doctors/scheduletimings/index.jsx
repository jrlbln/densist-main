import React,{useState,useEffect} from "react";

import DoctorSidebar from "../sidebar";
import { Link, useHistory } from "react-router-dom";
import getDayNameToday from "../../../../utils/dateFormats";
import { getSchedule, updateTimeslot } from "../../../../services/scheduleService";
import { getUserInfo } from "../../../../services/auth";
import ScheduleTimeslot from "./ScheduleTimeslot";


const ScheduleTiming = () => {
    const [day, setDay] = useState({});
    const [data, setData] = useState({});
	const [sched, setSchedule] = useState();
    const [timeslot, setTimeslot] = useState({});
    
        useEffect(() => {
            schedule();
            
        }, [])

        const isActive =(className, dateName) => {
            if(dateName ===  getDayNameToday()){
                return className;
            }else{
                return className;
            }
        }

        const schedule =()=>{
            getSchedule(getUserInfo().id).then((res) => {
                if (res && res.data) {
                    setSchedule(res.data.object)
                }
              })
        }

        const handleOnChange = (event) => {
            const {checked, name} = event.target
            if(!checked){
                setTimeslot({ ...timeslot, [name]: false })
            }else if(checked){
                setTimeslot({ ...timeslot, [name]: true })
            }
        }
        const resetTimeslot = () => {
            window.location.reload(false); 
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            updateTimeslot(timeslot, timeslot.id)
            window.location.reload(); 
        }
        // console.log(timeslot)
    return (
        <div>
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Schedule Timings</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Schedule Timings</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <DoctorSidebar />
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Schedule</h4>
                                            <div className="profile-box">
                                               
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card schedule-widget mb-0">
                                                            {/* <!-- Schedule Header --> */}
                                                            <div className="schedule-header">

                                                                {/* <!-- Schedule Nav --> */}
                                                                <div className="schedule-nav">
                                                                    <ul className="nav nav-tabs nav-justified">
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(sched.sunday)}} className={isActive("nav-link","Sunday")} data-bs-toggle="tab" href="#slot_sunday">Sunday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(sched.monday)}} className={isActive("nav-link","Monday")} data-bs-toggle="tab" href="#slot_monday">Monday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(sched.tuesday)}} className={isActive("nav-link","Tuesday")} data-bs-toggle="tab" href="#slot_tuesday">Tuesday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(sched.wednesday)}} className={isActive("nav-link","Wednesday")} data-bs-toggle="tab" href="#slot_wednesday">Wednesday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(sched.thursday)}} className={isActive("nav-link","Thursday")} data-bs-toggle="tab" href="#slot_thursday">Thursday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(sched.friday)}} className={isActive("nav-link","Friday")} data-bs-toggle="tab" href="#slot_friday">Friday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(sched.saturday)}} className={isActive("nav-link","Saturday")} data-bs-toggle="tab" href="#slot_saturday">Saturday</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* <!-- /Schedule Nav --> */}

                                                            </div>
                                                            {/* <!-- /Schedule Header -->
                        
                                                            <!-- Schedule Content --> */}
                                                            <div className="tab-content schedule-cont">

                                                                {/* <!-- Sunday Slot --> */}
                                                                <div id="slot_sunday" className={isActive("tab-pane fade show","Sunday")}>
                                                                    <ScheduleTimeslot day={day} sendData={setData} setTimeslot={setTimeslot}/>
                                                                </div>
                                                                {/* <!-- /Sunday Slot -->

                                                                <!-- Monday Slot --> */}
                                                                <div id="slot_monday" className={isActive("tab-pane fade show ","Monday")}>
                                                                    <ScheduleTimeslot day={day} sendData={setData} setTimeslot={setTimeslot}/>
                                                                </div>
                                                                {/* <!-- /Monday Slot -->

                                                                <!-- Tuesday Slot --> */}
                                                                <div id="slot_tuesday" className={isActive("tab-pane fade show","Tuesday")}>
                                                                    <ScheduleTimeslot day={day} sendData={setData} setTimeslot={setTimeslot}/>
                                                                </div>
                                                                {/* <!-- /Tuesday Slot -->

                                                                <!-- Wednesday Slot --> */}
                                                                <div id="slot_wednesday" className={isActive("tab-pane fade show","Wednesday")}>
                                                                    <ScheduleTimeslot day={day} sendData={setData} setTimeslot={setTimeslot}/>
                                                                </div>
                                                                {/* <!-- /Wednesday Slot --> */}

                                                                {/* <!-- Thursday Slot --> */}
                                                                <div id="slot_thursday" className={isActive("tab-pane fade show","Thursday")}>
                                                                    <ScheduleTimeslot day={day} sendData={setData} setTimeslot={setTimeslot}/>
                                                                </div>
                                                                {/* <!-- /Thursday Slot --> */}

                                                                {/* <!-- Friday Slot --> */}
                                                                <div id="slot_friday" className={isActive("tab-pane fade show","Friday")}>
                                                                    <ScheduleTimeslot day={day} sendData={setData} setTimeslot={setTimeslot}/>
                                                                </div>
                                                                {/* <!-- /Friday Slot --> */}

                                                                {/* <!-- Saturday Slot --> */}
                                                                <div id="slot_saturday" className={isActive("tab-pane fade show","Saturday")}>
                                                                    <ScheduleTimeslot day={day} sendData={setData} setTimeslot={setTimeslot}/>
                                                                </div>
                                                                {/* <!-- /Saturday Slot --> */}

                                                            </div>
                                                            {/* <!-- /Schedule Content --> */}


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Edit Time Slot Modal --> */}
            <div className="modal fade custom-modal" id="edit_time_slot" onClick={()=>resetTimeslot()} >
                <div className="modal-dialog modal-dialog-centered" onClick={e => {e.stopPropagation();}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Time slots</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>resetTimeslot()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form  onSubmit={handleSubmit}>
                                <div className="hours-info">
                                    <div className="row form-row hours-cont">
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time08_00am" 
                                                            value={data.time08_00am}
                                                            type="checkbox"
                                                            defaultChecked={data.time08_00am}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">08:00 - 08:59 am</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time09_00am" 
                                                            value={data.time09_00am}
                                                            type="checkbox"
                                                            defaultChecked={data.time09_00am}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">09:00 - 09:59 am</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time10_00am" 
                                                            value={data.time10_00am}
                                                            type="checkbox"
                                                            defaultChecked={data.time10_00am}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">10:00 - 10:59 am</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time11_00am" 
                                                            value={data.time11_00am}
                                                            type="checkbox"
                                                            defaultChecked={data.time11_00am}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">11:00 - 11:59 am</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time12_00pm" 
                                                            value={data.time12_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time12_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">12:00 - 12:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time01_00pm" 
                                                            value={data.time01_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time01_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">01:00 - 01:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time02_00pm" 
                                                            value={data.time02_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time02_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">02:00 - 02:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time03_00pm" 
                                                            value={data.time03_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time03_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">03:00 - 03:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time04_00pm" 
                                                            value={data.time04_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time04_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">04:00 - 04:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time05_00pm" 
                                                            value={data.time05_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time05_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">05:00 - 05:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time06_00pm" 
                                                            value={data.time06_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time06_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">06:00 - 06:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time07_00pm" 
                                                            value={data.time07_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time07_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">07:00 - 07:59 pm</label>
                                        </div>
                                        <div className="form-group row">
                                                <div className="col-lg-2">
                                                    <div className="form-check form-check-inline form-switch">
                                                            <input
                                                            className="form-check-input"
                                                            id="flexSwitchCheckDefault"
                                                            name="time08_00pm" 
                                                            value={data.time08_00pm}
                                                            type="checkbox"
                                                            defaultChecked={data.time08_00pm}
                                                            onClick={(e)=> handleOnChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <label className="col-lg-6 col-form-label  text-center">08:00 - 08:59 pm</label>
                                        </div>
                                        
                                        
                                       
                                       

                                        
                                    </div>
                                </div>
                                <div className="submit-section text-center">
                                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Edit Time Slot Modal --> */}
        </div>
    );
}


export default ScheduleTiming;

