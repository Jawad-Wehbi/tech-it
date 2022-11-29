const Title = ({
  BoldCall,
  PageTitle = "company SignUp",
  BoldTitle = "Tech-It",
}) => {
  return (
    <b className="relative w-fit h-fit justify-start shrink-0 text-xl text-indigo-600	">
      <h5 className="font-semibold">{BoldCall}</h5>
      <h5>{PageTitle}</h5>
      <h5 className=" text-2xl font-black">{BoldTitle}</h5>
    </b>
  );
};

export default Title;
