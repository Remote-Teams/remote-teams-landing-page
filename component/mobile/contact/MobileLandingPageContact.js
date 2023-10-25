import React, { useState } from "react";
import MobileNavbar from "../MobileNavbar";
import Link from "next/link";

const arrow = "./img/mobile/arrow.png";

const MobileLandingPageContact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pnumber: "",
    companyName: "",
    message: "",
  });
  const handleOnChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };
  return (
    <div>
      <MobileNavbar />
      <div className="row align-items-end mx-0 pl-39">
        <Link href="/">
          <img src={arrow} alt="back arrow" className="back-arrow" />
        </Link>
        <h5 className="font-14-bold">GO BACK</h5>
      </div>
      <div className="postion-relative">
        <h5 className="font-96-extrabold ml--10">Contact</h5>
        <h2 className="mobile-page-title mobile-page-title--pricing">
          Contact
        </h2>
      </div>
      <div className="mb-68">
        <form
          autoComplete="off"
          noValidate
          className="pl-39 pr-60"
          onSubmit={handleSubmit}
        >
          {/* full name */}
          <div className="mobile-contact-input">
            <label htmlFor="name">FULL NAME</label>
            <div className="mobile-input">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleOnChange}
                placeholder="Remote Teams"
              />
            </div>
          </div>
          {/* email address */}
          <div className="mobile-contact-input mt-29">
            <label htmlFor="email">Email address</label>
            <div className="mobile-input">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleOnChange}
                placeholder="mail@mail.com"
              />
            </div>
          </div>
          {/* phone number */}
          <div className="mobile-contact-input mt-29">
            <label htmlFor="pnumber">PHONE NUMBER</label>
            <div className="mobile-input">
              <input
                type="text"
                pattern="[0-9]*"
                maxLength="10"
                name="pnumber"
                value={values.pnumber}
                onChange={handleOnChange}
              />
            </div>
          </div>
          {/* company name */}
          <div className="mobile-contact-input mt-29">
            <label htmlFor="companyName">COMPANY NAME</label>
            <div className="mobile-input">
              <input
                type="text"
                name="companyName"
                value={values.companyName}
                onChange={handleOnChange}
              />
            </div>
          </div>
          {/* message */}
          <div className="mobile-contact-input mt-29">
            <label htmlFor="companyName">MESSAGE</label>
            <div className="mobile-input mobile-input-textarea">
              <textarea
                type="text"
                name="message"
                value={values.message}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row mx-0 justify-content-center">
            <button
              className="mobile-gradient-btn mobile-gradient-btn--contact"
              onClick={handleSubmit}
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileLandingPageContact;
