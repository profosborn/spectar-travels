import "../css/tourdetail.css";

function BookingFormModal() {
    
    return ( 
        <div className="bk-modal">
            <div className="bk-heading"><h1>Booking Form</h1></div>
            <div>
                <form action="">
                    <div className="bk-input-box">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder="Enter name" className="bk-input-one"/>
                    </div>
                    <div className="bk-input-box">
                        <label htmlFor="">Service Type</label>
                        <input type="text" list="serviceType" placeholder="Select service type"/>
                        <datalist id="serviceType">
                            <option value="Fam1"></option>
                            <option value="Fam2"></option>
                            <option value="Fam3"></option>
                            <option value="Fam4"></option>
                        </datalist>
                    </div>
                    <div className="bk-input-box">
                        <label htmlFor="">Email</label>
                        <input type="email" className="bk-input-three" placeholder="Email address"/>
                    </div>
                    <div className="bk-input-box">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder="Phone" className="bk-input-four"/>
                    </div>
                    <div className="bk-input-box">
                        <label htmlFor="">Message</label>
                        <input type="text" placeholder="message" className="bk-input-five"/>
                    </div>
                    <div>
                        <button className="form-btn bk-form-btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default BookingFormModal;