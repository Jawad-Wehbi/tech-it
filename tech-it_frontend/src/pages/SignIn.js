import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "../components/SignPages/Input.js";
import Button from "../components/SignPages/Button.js";
import Logo from "../components/SignPages/Logo.js";
import Text from "../components/SignPages/Text.js";
import Title from "../components/SignPages/Title.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "../api/axios";
import { useAuth } from "../context/AuthProvider";

const LOGIN_URL = "/sign-in";

const SignIn = () => {
  const { setTokens } = useAuth();
  // const { profile, setProfile, tokenData, setTokenData, tokens, setTokens } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setTokens({ email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <div className="relative bg-white flex flex-row justify-between w-screen h-screen overflow-hidden text-base text-black font-roboto">
              <div className="absolute top-[0px] right-[0px] w-1/2 height:100% flex flex-col p-[250px_250px] box-border items-center justify-start gap-[35px]">
                <Title companySignUp="Sign-In to" BoldTitle="Tech-It" />
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />

                <Button submit="SIGN-IN" type="submit" />
                <Text
                  haveAnAccount="Don't have an account?"
                  link="Sign-up"
                  nextPage="sign-up"
                />
              </div>
              <Logo className="flex" />
        </div>
    </form>
  );
};

export default SignIn;
