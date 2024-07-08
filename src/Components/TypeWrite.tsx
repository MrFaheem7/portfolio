import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["Assosiate Software Engineer", "React Js Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
