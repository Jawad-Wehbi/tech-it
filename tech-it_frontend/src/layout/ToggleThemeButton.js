import { Switch } from "@mui/material";

export default function ToggleThemeButton({handleThemeChange, darkState}) {
 
  return (
      <Switch checked={darkState} onChange={handleThemeChange} />
  );
}