import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }, 
  overrides:{
      MuiInputBase:{
          color:'#2E2E38',
          borderWidth:'3px',
          borderRadius:'50px',
      },
      MuiInput:{
          color:'#6E6E87',
          borderWidth:'3px',
          borderRadius:'50px',

      }
  }

})





export default theme;