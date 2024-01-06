// import React, { useState, useEffect } from "react";
// import "./style.css";
// import axios from "axios";
// import logo from "../../Assets/images/i_cell_logo.png";

// function Recruitment() {
//   const [msg, setMsg] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     wtspno: "",
//     branch: "",
//     domain: "",
//     docupload: "",
//     semester: "",
//     whyjoin: "",
//     whyselect: "",
//     clubjoin: "",
//     achievement: "",
//   });
//   const [data, setData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://sheet.best/api/sheets/9e6f97f5-dc36-49e8-b0f7-8e6e17895cde",
//         formData
//       );
//       setMsg("Thank You");
//       console.log(formData);
//       // Optionally, you can reset the form data here
//       setFormData({
//         name: "",
//         email: "",
//         wtspno: "",
//         branch: "",
//         domain: "",
//         docupload: "",
//         semester: "",
//         whyjoin: "",
//         whyselect: "",
//         clubjoin: "",
//         achievement: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setMsg("Submission failed. Please try again.");
//     }
//   };

//   useEffect(() => {
//     // Fetch data on component mount
//     axios
//       .get("https://sheet.best/api/sheets/9e6f97f5-dc36-49e8-b0f7-8e6e17895cde")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array to fetch data only once

//   return (
//     <>
//       <body>
//         <div className="container_form">
//           <div className="login__content">
//             <div style={{ textAlign: "center" }}>
//               <h1 className="login__title">
//                 <img src={logo} alt="icell image" />
//                 <span>Welcome to</span> I-Cell
//               </h1>
//               <p className="login__description">INNOVATION CELL RECRUITMENT</p>
//             </div>

//             <form method="post" id="frmSubmit" onSubmit={handleSubmit}>
//               <div style={{ margin: "0 10vw" }}>
//                 <div className="login__inputs">
//                   <div>
//                     <div className="login__div">Name</div>
//                     <input
//                       type="text"
//                       placeholder="Enter your name"
//                       required
//                       className="login__input"
//                       name="name"
//                       value={formData.name}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">Email</div>
//                     <input
//                       type="email"
//                       placeholder="Enter your email address"
//                       required
//                       className="login__input"
//                       name="email"
//                       value={formData.email}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">WhatsApp Contact No</div>
//                     <input
//                       type="text"
//                       placeholder="Enter your mobile number"
//                       required
//                       className="login__input"
//                       name="wtspno"
//                       value={formData.wtspno}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">Branch</div>
//                     <input
//                       type="text"
//                       placeholder="Write your branch"
//                       required
//                       className="login__input"
//                       name="branch"
//                       value={formData.branch}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">Select Domain</div>
//                     <select
//                       required
//                       className="login__input"
//                       name="domain"
//                       value={formData.domain}
//                       onChange={(e) => handleChange(e)}
//                     >
//                       <option className="select_option" value="">
//                         Select Domain
//                       </option>
//                       <option
//                         className="select_option"
//                         value="Public Relations"
//                       >
//                         Public Relations
//                       </option>
//                       <option className="select_option" value="Documentation">
//                         Documentation
//                       </option>
//                       <option
//                         className="select_option"
//                         value="Design and Editing"
//                       >
//                         Design and Editing
//                       </option>
//                       <option className="select_option" value="Sponsorship">
//                         Sponsorship
//                       </option>
//                       <option
//                         className="select_option"
//                         value="Event Management"
//                       >
//                         Event Management
//                       </option>
//                     </select>
//                   </div>

//                   <div>
//                     <div className="login__div">
//                       If choosing Editing, Desing and Documentation upload your
//                       work here
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Insert google drive link here"
//                       required
//                       className="login__input"
//                       name="docupload"
//                       value={formData.docupload}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">Semester</div>
//                     <input
//                       type="text"
//                       placeholder="Write your semester"
//                       required
//                       className="login__input"
//                       name="semester"
//                       value={formData.semester}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">
//                       Why do you want to join this club?
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Your answer"
//                       required
//                       className="login__input"
//                       name="whyjoin"
//                       value={formData.whyjoin}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">Why should we select you?</div>
//                     <input
//                       type="text"
//                       placeholder="Your answer"
//                       required
//                       className="login__input"
//                       name="whyselect"
//                       value={formData.whyselect}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">
//                       What other Clubs are you part of or you want to join in
//                       future?
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Your answer"
//                       required
//                       className="login__input"
//                       name="clubjoin"
//                       value={formData.clubjoin}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div>
//                     <div className="login__div">
//                       Specify your achievement (if any).
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Your answer"
//                       className="login__input"
//                       name="achievement"
//                       value={formData.achievement}
//                       onChange={(e) => handleChange(e)}
//                     />
//                   </div>
//                   <div
//                     id="msg"
//                     style={{
//                       textAlign: "center",
//                       color: "white",
//                       fontSize: "20px",
//                       fontWeight: "600",
//                     }}
//                   >
//                     {msg}
//                   </div>
//                   <div>
//                     <div className="login__buttons">
//                       <button
//                         type="submit"
//                         id="btnSubmit"
//                         className="login__button"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// }

// export default Recruitment;

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
    // Fetch data on component mount
    axios
      .get("https://sheet.best/api/sheets/9e6f97f5-dc36-49e8-b0f7-8e6e17895cde")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to fetch data only once

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
      // Optionally, you can reset the form data here
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
