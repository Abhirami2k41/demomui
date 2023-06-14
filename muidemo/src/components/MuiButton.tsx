import { Stack,Button } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import { Login } from "@mui/icons-material";
export const MuiButton = () => {
  return (
    <Stack display='block'>
      <Button variant="contained" size="large" endIcon={<LoginIcon />} color="secondary" href="https://www.linkedin.com/pulse/7-reasons-why-life-isnt-fair-how-better-accepting-steve-wohlenhaus" onClick={()=>alert('clicked')} >Log In</Button>
    </Stack>
  )
}