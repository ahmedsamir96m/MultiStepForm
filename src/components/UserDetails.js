import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class UserDetails extends Component {
    handleContinue = e => {
        e.preventDefault()
        this.props.nextStep()

    }

    render() {
        const { values, handleFieldsChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"></AppBar>
                    <br/>
                    <TextField 
                        hintText="Enter Your First Name" 
                        floatingLabelText="First Name"
                        onChange={handleFieldsChange('firstName')}
                        defaultValue={values.firstName}
                    ></TextField>
                    <br/>
                    <TextField 
                        hintText="Enter Your Last Name" 
                        floatingLabelText="Last Name"
                        onChange={handleFieldsChange('lasttName')}
                        defaultValue={values.lastName}
                    ></TextField>
                    <br />
                    <TextField 
                        hintText="Enter Your Email Name" 
                        floatingLabelText="Email Name"
                        onChange={handleFieldsChange('eMail')}
                        defaultValue={values.eMail}
                    ></TextField>
                    <br     />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.handleContinue}
                    >
                    </RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default UserDetails
