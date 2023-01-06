import React from "react";
import FounderImg from "./Founder.JPG"; // with import

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color: "black",
  //     backgroundColor: "white",
  //   });

  //   const [btnText, setBtnText] = useState("Enable to dark mode");

  //   const useStyle = () => {
  //     if (myStyle.color === "black") {
  //       setMyStyle({
  //         color: "white",
  //         backgroundColor: "rgb(27, 26, 26)",
  //         // border: "1px solid white",
  //       });
  //       setBtnText("Enable to light mode");
  //     } else {
  //       setMyStyle({
  //         color: "black",
  //         backgroundColor: "white",
  //       });
  //       setBtnText("Enable to dark mode");
  //     }
  //   };

  return (
    <div
      className="container-sm my-5"
      style={{
        color: props.textMode.color,
        backgroundColor: props.textMode.aboutBg,
        width: "70%",
      }}
    >
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item pb-2 "
          style={{
            color: props.textMode.color,
            backgroundColor: props.textMode.aboutBg,
          }}
        >
          <h2 className="accordion-header text-center" id="headingOne">
            <button
              className="accordion-button"
              style={{
                color: props.textMode.color,
                backgroundColor: props.textMode.aboutBg,
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Founder</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className=" container accordion-body "
              style={{
                color: props.textMode.color,
                backgroundColor: props.textMode.aboutBg,
              }}
            >
              <div
                className="container"
                style={{
                  color: props.textMode.color,
                  backgroundColor: props.textMode.aboutBg,
                }}
              >
                <img
                  src={FounderImg}
                  className="rounded-circle border-4 float-sm-end my-0 mx-3"
                  alt="Founder"
                />
                <strong className="">MR. ABHISHEK TADA</strong>
                <p className="my-3">
                  {" "}
                  He is the creator of this TextUtils for purpose of manipulate
                  the text and use as required.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
