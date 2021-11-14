import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
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
        const { values: { firstName, lastName, eMail, bio, city, occupation, phone } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>    
                    <AppBar title="Confirm Data"></AppBar>
                    <br/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }
                        ></ListItem>
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        ></ListItem>
                        <ListItem
                            primaryText="E-Mail"
                            secondaryText={ eMail }
                        ></ListItem>
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        ></ListItem>
                        <ListItem
                            primaryText="City"
                            secondaryText={ city }
                        ></ListItem>
                        <ListItem
                            primaryText="Bio"
                            secondaryText={ bio }
                        ></ListItem>
                        <ListItem
                            primaryText="Phone Number"
                            secondaryText={ phone }
                        ></ListItem>
                    </List>
                    <br />
                    <RaisedButton 
                        label="Confirm"
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
