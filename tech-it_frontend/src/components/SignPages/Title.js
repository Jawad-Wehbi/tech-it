const Title = ({
  BoldCall,
  PageTitle = "company SignUp",
  BoldTitle = "Tech-It",
}) => {
  return (
    <b className="relative inline-block w-full h-fit shrink-0">
      <h1 className="font-semibold ">{BoldCall}</h1>
      {PageTitle}
      <h1 className="font-black">{BoldTitle}</h1>
    </b>
  );
};

export default Title;
