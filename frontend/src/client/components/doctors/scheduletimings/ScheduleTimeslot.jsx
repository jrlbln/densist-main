import React from 'react'

const ScheduleTimeslot = (props) => {
    const day = props.day
    // console.log(day)
    // delete day.id;
    const  isTrue = () => {
      for(var o in day){
        if(day[o] === true){
            return false;}
      }
    }
    const sendData = () =>{
      props.sendData(day);
      props.setTimeslot(day);
    }


 if(isTrue() != false){
       
        return(
        <>  
            <h4 className="card-title d-flex justify-content-between">
                <span>Time Slots</span>
                <a className="edit-link" data-bs-toggle="modal" href="#edit_time_slot" onClick={()=>sendData()}><i className="fa fa-plus-circle"></i> Add Slot</a>
            </h4>
            <p className="text-muted mb-0">Not Available</p>

            
        </>
        )
    }else{
       return(
       <>
         <h4 className="card-title d-flex justify-content-between">
                    <span>Time Slots</span>
                    <a className="edit-link" data-bs-toggle="modal" href="#edit_time_slot" onClick={()=>sendData()}><i className="fa fa-edit me-1"></i>Edit</a>
                </h4>

                {/* <!-- Slot List --> */}
                <div className="doc-times">
                       <div className="doc-slot-list" hidden={!day.time08_00am}>
                            08:00 - 08:59 am
                        </div>
                        <div className="doc-slot-list" hidden={!day.time09_00am}>
                            09:00 - 09:59 am
                        </div>
                        <div className="doc-slot-list" hidden={!day.time10_00am}>
                            10:00 - 10:59 am
                        </div>
                        <div className="doc-slot-list" hidden={!day.time11_00am}>
                            11:00 - 11:59 am
                        </div>
                        <div className="doc-slot-list" hidden={!day.time12_00pm}>
                            12:00 - 12:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time01_00pm}>
                            01:00 - 01:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time02_00pm}>
                            02:00 - 02:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time03_00pm}>
                            03:00 - 03:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time04_00pm}>
                            04:00 - 04:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time05_00pm}>
                            05:00 - 05:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time06_00pm}>
                            06:00 - 06:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time07_00pm}>
                            07:00 - 07:59 pm
                        </div>
                        <div className="doc-slot-list" hidden={!day.time08_00pm}>
                            08:00 - 08:59 pm
                        </div>

                </div>
                {/* <!-- /Slot List --> */}

               
       </>)
    }
}

export default ScheduleTimeslot