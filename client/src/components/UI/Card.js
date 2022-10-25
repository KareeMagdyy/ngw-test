const Card = ({ children, classes }) => {
  return (
    <section
      className={
        "container max-h-[750px] bg-[#394376af]  w-[90vw] h-[80vh] lg:w-[65vw] md:h-[60vh] rounded-lg shadow-2xl p-10 flex flex-col items-center justify-center text-center text-white " +
        classes
      }
    >
      {children}
    </section>
  );
};

export default Card;
