import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import logo from '../images/logo_image.png';

const styles = theme => ({
  loginTotal: {
    marginLeft:"30%",
    marginRight:"30%",
    width:"40%",
    paddingTop: "9rem",
    fontFamily: 'Noto Sans KR',
    fontSize: "1rem",
    '@media (max-width:960px)': {
      marginLeft:"10%",
      marginRight:"10%",
      width:"80%",
    }
  },
  join: {
    marginTop: "1.8rem",
    marginBottom: "9rem",
    height: "2.5rem",
    lineHeight: '2.5rem',
    paddingLeft: "1.25rem",
    backgroundColor: "#eeeeee"
  }
});

class LoginComponent extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    alert('login');
  }

  render() {
    const { classes } = this.props
    return (
      <div className="root">
        <form noValidate autoComplete="off" className ={classes.loginTotal}>
          <div>
            <img src={logo} style={{"margin-left":"25%", "width":"20rem", "height": "10rem"}}/>
          </div>
          <div className={classes.join} style={{marginBottom:"1.25rem"}}>
            SnackChat Account
          </div>
          <TextField label="Email" margin="normal" fullWidth/>
          <TextField label="Password" type="password" margin="normal" fullWidth/>
          <div style={{marginTop:"1.25rem"}}>
            <Button style={{"width":"49%","font-size":"1rem", "text-transform":"none"}} variant="outlined" color="inherit" onClick={this.handleLogin}>Login</Button>
            <Button style={{"width":"49%", "margin-left":"2%", "font-size":"1rem", "text-transform":"none"}} variant="outlined" color="inherit">Forgot Passwrod?</Button>
          </div>
          <div className={classes.join} style={{marginBottom:"1.25rem"}}>
            First time here? Create your account
          </div>
          <div>
            <Button style={{"width":"95%", "margin-left":"2%", "font-size":"1rem", "text-transform":"none"}} variant="outlined" color="inherit" onClick={this.handleLogin}>Create an account</Button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default withStyles(styles) (LoginComponent);