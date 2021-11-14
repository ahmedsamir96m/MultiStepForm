import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class PersonalDetails extends Component {
    // Handle Going Forward To Next Step
    handleContinue = e => {
        e.preventDefault()
        this.props.nextStep()

    }

    // Handle Going Back To Previous Step
    handleBack = e => {
        e.preventDefault()
        this.props.prevStep()

    }

    render() {
        const { values, handleFieldsChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details"></AppBar>
                    <br/>
                    <TextField 
                        hintText="Enter Occupation" 
                        floatingLabelText="Occupation"
                        onChange={handleFieldsChange('occupation')}
                        defaultValue={values.occupation}
                    ></TextField>
                    <br/>
                    <TextField 
                        hintText="Enter Your City" 
                        floatingLabelText="City"
                        onChange={handleFieldsChange('city')}
                        defaultValue={values.city}
                    ></TextField>
                    <br />
                    <TextField 
                        hintText="Enter Your Phone Number" 
                        floatingLabelText="Phone Number"
                        onChange={handleFieldsChange('phone')}
                        defaultValue={values.phone}
                    ></TextField>
                    <br     />
                    <TextField 
                        hintText="Enter Your Bio" 
                        floatingLabelText="Bio"
                        onChange={handleFieldsChange('bio')}
                        defaultValue={values.bio}
                    ></TextField>
                    <br     />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.handleContinue}
                    >
                    </RaisedButton>
                    <RaisedButton 
                        label="Back"
                        primary={true}
                        style={styles.button}
                        onClick={this.handleBack}
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

export default PersonalDetails
