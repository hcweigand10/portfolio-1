import React, {useState} from "react";
import {Element} from "react-scroll"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [formInfo, setFormInfo] = useState({name: "", email: "", message: ""})
  const [result, setResult] = useState("")

  const handleChange = (e) => {
    setFormInfo({...formInfo, [e.target.name]: e.target.value})
  }
  console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
  const handleSend = async () => {
    const response = await emailjs.send("service_7p1f6le", "template_z3711la", formInfo, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    console.log(response)
    if (response.status === 200) {
      setResult("Message sent!")
    } else {
      setResult("Error sending message")
    }
  }

    return (
        <Element className="py-4 bg-custom-lg" id="contact" name="contact">
            <h2 className="section-heading text-center mb-1">Contact</h2>
            <div className="d-flex justify-content-center">
                <hr className="section-underline underline-secondary" />
            </div>
            <h6 className="text-center">
                Any Questions? Shoot me an email below!
            </h6>
            <form
                className="mx-auto"
                style={{ width: "80%", maxWidth: "650px" }}
            >
                <div className="form-group">
                    <label htmlFor="form-name">Name</label>
                    <input
                        name="name"
                        className="shadow form-control mx-auto"
                        id="form-name"
                        style={{
                            width: "100%",
                            border: "none",
                        }}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="form-name">Email</label>
                    <input
                        name="email"
                        className="shadow form-control mx-auto"
                        id="form-name"
                        style={{
                            width: "100%",
                            border: "none",
                        }}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="form-message">Message</label>
                    <textarea
                        name="message"
                        className="shadow form-control mx-auto"
                        id="form-message"
                        rows={4}
                        style={{
                            width: "100%",
                            border: "none",
                        }}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="d-flex">
                    <button
                        type="button"
                        className="btn custom-btn my-3 mx-auto"
                        onClick={handleSend}
                    >
                        Send Message
                    </button>
                </div>
                <p className={result === "Message sent!" ? "emerald text-center" : "text-center red"}>{result}</p>
            </form>
        </Element>
    );
};

export default Contact;
