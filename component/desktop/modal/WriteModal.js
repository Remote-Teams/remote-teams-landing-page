import React, { useState } from "react";
//import Select from "react-select";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const WriteModal = ({ text, extraClass, textClass }) => {
  const dropdownOptions = [
    { value: "Book a demo", label: "Book a demo" },
    { value: "Write to us", label: "Write to us" },
    {
      value: "enqurie about enterprise plan",
      label: "enqurie about enterprise plan",
    },
    { value: "other", label: "other" },
  ];
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    pnumber: "",
    companyName: "",
    purpose: "",
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
  const handleSubmitOnButton = (event) => {
    event.preventDefault();
    console.log(values);
    setOpen(!open);
  };
  const onCloseModal = () => {
    setOpen(!open);
  };
  const openModal = () => {
    setOpen(!open);
  };
  return (
    <div>
      <button className={`${extraClass}`} onClick={openModal}>
        <span className={`${textClass}`}>{text}</span>
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customCloseButton",
        }}
      >
        <span className="closeIconInModal" onClick={onCloseModal} />
        <div className="column-div">
          <h1 className="modal-title">Get in touch</h1>
          <div className="pt-40">
            <form
              autoComplete="off"
              noValidate
              className="pl-39 pr-60"
              onSubmit={handleSubmit}
            >
              <div className="row mx-0 align-items-center flex-nowrap justify-content-center">
                {/* email address */}
                <div className="web-contact-input mt-29">
                  <label htmlFor="email">Email address</label>
                  <div className="web-input">
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleOnChange}
                      //placeholder="mail@mail.com"
                    />
                  </div>
                </div>
                {/* full name */}
                <div className="web-contact-input ml-150">
                  <label htmlFor="name">FULL NAME</label>
                  <div className="web-input">
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleOnChange}
                      //placeholder="Remote Teams"
                    />
                  </div>
                </div>
              </div>
              <div className="row mx-0 align-items-center flex-nowrap justify-content-center">
                {/* company name */}
                <div className="web-contact-input mt-29">
                  <label htmlFor="companyName">COMPANY NAME</label>
                  <div className="web-input">
                    <input
                      type="text"
                      name="companyName"
                      value={values.companyName}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                {/* phone number */}
                <div className="web-contact-input ml-150">
                  <label htmlFor="pnumber">PHONE NUMBER</label>
                  <div className="web-input">
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
              </div>
              {/** Select */}
              <div className="modal-select">
                <h5 className="field-text">Purpose</h5>
                <select
                  className="react-select-elements"
                  placeholder="book a demo"
                  name="purpose"
                  onChange={handleOnChange}
                >
                  {dropdownOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* message */}
              <div className="web-contact-input web-contact-input--textarea">
                <label htmlFor="companyName">MESSAGE</label>
                <div className="web-input web-input-textarea">
                  <textarea
                    type="text"
                    name="message"
                    value={values.message}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </form>
            <div className="row mx-0 justify-content-center">
              <button
                className="pink-gradient-button pink-gradient-button--contact"
                onClick={handleSubmitOnButton}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WriteModal;
