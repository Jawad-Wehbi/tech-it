import Input from "../components/SignPages/Input.js";
import Button from "../components/SignPages/Button.js";
import Logo from "../components/SignPages/Logo.js";
import Text from "../components/SignPages/Text.js";
import Title from "../components/SignPages/Title.js";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

const CompanySignUp = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <div className="relative bg-white w-screen h-screen overflow-hidden text-base text-black font-roboto">
        {/* <Grid container spacing={2}> */}
          {/* <Grid item sm={12} lg={12}> */}
            <div className="absolute top-[0px] right-[0px] w-1/2 height:100% flex flex-col p-[250px_250px] box-border items-center justify-start gap-[35px]">
              <Title BoldCall="Company? " PageTitle="Let's Sign-up to" BoldTitle="Tech-It" />
              <Input placeholder="Company Name" />
              <Input placeholder="Company Email" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />

              <Button submit="SIGN-UP" />
              <Text haveAnAccount="Have an account?" link="Log-in" nextPage="sign-in"/>
            </div>
          {/* </Grid> */}
          {/* <Grid item sm={12} lg={12}> */}
            <Logo />
          {/* </Grid> */}
        {/* </Grid> */}
      </div>
    // </Box>
  );
};

export default CompanySignUp;
