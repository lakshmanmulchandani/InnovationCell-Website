import { TypeAnimation } from "react-type-animation";

const AnimationComponent = () => {
  return (
    <TypeAnimation
      
      sequence={[
        "i-Talks",
        800, // Waits 1s
        "Seed Grants for Startups",
        800, // Waits 1s
        "Avinya - Unveiling the Future", 
        800, // Waits 1s
        "Avinya - Unveiling the Future",
        () => {
          console.log("Sequence completed");
        },
      ]}
      deletionSpeed={{type: "keyStrokeDelayInMs", value: 25}}
      speed={{type: "keyStrokeDelayInMs", value: 50}}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        width:"100%",
        textAlign:"center",
        fontSize: "1.4rem",
        fontWeight: "600",
        color: "#bababa",
        fontFamily: "poppins",
        letterSpacing: "0.2px",
        display:"inline-block"
      }}
    />
  );
};

export default AnimationComponent;
