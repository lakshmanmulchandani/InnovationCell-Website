// import React from "react";
// import Popup from "reactjs-popup";
// import sch from "../Sponsors/schedule.jpg";

// const ModelPop = () => {
//   return (
//     <Popup
//       trigger={<button className="schedule_btn"> Avinya Schedule</button>}
//       position="right center"
//     >
//       <div>
//         <img src={sch} alt="" />
//       </div>
//     </Popup>
//   );
// };

// export default ModelPop;

import React from "react";
import Popup from "reactjs-popup";
import sch from "../Sponsors/schedule.jpg";
import CloseModal from "../../Assets/images/close.png";

const ModelPop = () => {
  return (
    <div className="main_schedule">
      <Popup
        trigger={<button className="schedule_btn"> Avinya Schedule</button>}
        position="right center"
        modal
      >
        {(close) => (
          <div>
            
            <div className="modal-div">
              <img className="schedule_img" src={sch} alt="" />
              <button className="close_btn" onClick={close}>
              <div className="cross">
                {" "}
                <img alt="close" src={CloseModal} width={25} height={25}></img>
              </div>
            </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ModelPop;
