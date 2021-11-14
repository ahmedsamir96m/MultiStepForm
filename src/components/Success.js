import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

export class Success extends Component {
    // Handle Going Back To Previous Step
    handleBack = e => {
        e.preventDefault()
        this.props.handleNewRecord()
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>    
                    <AppBar title="Success"></AppBar>
                    <h1>Thanks For Your Submission!</h1>
                    <p>HR will contact you soon for further instractions.</p>
                    <br />
                    <RaisedButton 
                        label="New Record!"
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
        margin: 15,
    }
}

export default Success
