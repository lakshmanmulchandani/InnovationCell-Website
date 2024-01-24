import { TypeAnimation } from "react-type-animation";

const AnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "i-Talks",
        1000, // Waits 1s
        "Seed Grants for Startups",
        1000, // Waits 1s
        "Avinya Unveiling the Future", 
        1000, // Waits 1s
        "Avinya Unveiling the Future",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        width:"100%",
        textAlign:"center",
        fontSize: "1.4rem",
        fontWeight: "600",
        color: "var(--green)",
        fontFamily: "Crime",
        letterSpacing: "0.2px",
        display:"inline-block"
      }}
    />
  );
};

export default AnimationComponent;
