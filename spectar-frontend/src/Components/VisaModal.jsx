function VisaModal() {
    return ( 
        <div className="bk-modal visa-modal">
        <div className="bk-heading"><h1>Visa Booking Form</h1></div>
        <div>
            <form action="">
                <div className="bk-input-box">
                    <label htmlFor="">Full Name</label>
                    <input type="text" className="bk-input-one" placeholder="Enter Name"/>
                </div>
                <div className="bk-input-box">
                    <label htmlFor="">Email</label>
                    <input type="email" className="bk-input-two" placeholder="Email Address"/>
                </div>
                <div className="bk-input-box">
                    <label htmlFor="">Country</label>
                    <input type="text" className="bk-input-three" placeholder="Enter Country"/>
                </div>
                <div className="bk-input-box">
                    <label htmlFor="">Budget for travel</label>
                    <input type="text" className="bk-input-four" placeholder="Enter your budget"/>
                </div>
                <div className="bk-input-box">
                    <label htmlFor="">Purpose for travel</label>
                    <input type="text" className="bk-input-five" placeholder="Enter your purpose of travel"/>
                </div>
                <div className="bk-input-box">
                    <label htmlFor="">Phone</label>
                    <input type="text" className="bk-input-five" placeholder="Phone Number"/>
                </div>
                <div>
                    <button className="form-btn bk-form-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
     );
}

export default VisaModal;