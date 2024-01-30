import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import logo from "../../Assets/images/i_cell_logo.png";
import formConfig from "./recruitment.json";

function Recruitment() {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/9e6f97f5-dc36-49e8-b0f7-8e6e17895cde")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://sheet.best/api/sheets/9e6f97f5-dc36-49e8-b0f7-8e6e17895cde",
        formData
      );
      setMsg("Thank You");
      setTimeout(() => {
        setMsg("");
      }, 4000);
      console.log(formData);
      // we can reset data here also
      setFormData({});
    } catch (error) {
      console.error("Error submitting form:", error);
      setMsg("Submission failed. Please try again.");
    }
  };

  return (
    <body>
      <div className="container_form">
        <div className="login__content">
          <div style={{ textAlign: "center" }}>
            <h1 className="login__title">
              <img src={logo} alt="icell image" />
              <span>Welcome to</span> I-Cell
            </h1>
            <p className="login__description">{formConfig[0][0].head}</p>
          </div>

          <form method="post" id="frmSubmit" onSubmit={handleSubmit}>
            <div style={{ margin: "0 10vw" }}>
              <div className="login__inputs">
                {formConfig[1].map((field, index) => (
                  <div key={index}>
                    <div className="login__div">{field.label}</div>
                    {field.type === "select" ? (
                      <select
                        required={field.required}
                        className="login__input"
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleChange(e)}
                      >
                        {field.options.map((option, optionIndex) => (
                          <option
                            key={optionIndex}
                            className="select_option"
                            placeholder="Select domain.."
                            value={option}
                          >
                            {option || "Select domain"}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="login__input"
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleChange(e)}
                      />
                    )}
                  </div>
                ))}
                <div
                  id="msg"
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {msg}
                </div>
                <div className="login__buttons">
                  <button
                    type="submit"
                    id="btnSubmit"
                    className="login__button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Recruitment;
