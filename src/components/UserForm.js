import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails';
import UserDetails from './UserDetails'
import Confirm from './Confirm'
import Success from './Success'
export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        occupation: '',
        eMail: '',
        city: '',
        bio: '',
        phone: '',
    }

    // Proced to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1 
        })
    }

    // Back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        })
    }

    // Handle Changing Fields
    handleFieldsChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    // Handle New Record After Submission (back to step 1 & resets the state)
    handleNewRecord = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            occupation: '',
            eMail: '',
            city: '',
            bio: '',
            phone: '',
        })
    }


    render() {
        const { step } = this.state;
        const { firstName, lastName, eMail, occupation, city, bio, phone } = this.state;
        const values = { firstName, lastName, eMail, occupation, city, bio, phone };

        // Condational Rendering with Switch
        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep = {this.nextStep}
                        handleFieldsChange = {this.handleFieldsChange}
                        values = {values}
                    ></UserDetails>
                )
                break;

            case 2:
                return (
                    <PersonalDetails
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleFieldsChange = {this.handleFieldsChange}
                        values = {values}
                    >
                    </PersonalDetails>
                )
                break;
            case 3:
                return (
                    <Confirm
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        values = {values}
                    >
                    </Confirm>
                )
                break;
            case 4: 
                return (
                    <Success
                        prevStep = {this.prevStep}
                        handleNewRecord = {this.handleNewRecord}
                    >
                    </Success>    
                )
            default:
                return (
                    <h1>Something went wrong! <br/>Kindly clear cashe & cookies & refresh </h1>
                )
        }
    }
}

export default UserForm
