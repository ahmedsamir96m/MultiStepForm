import React, { Component } from 'react'

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
            step: step - 1 
        })
    }

    // Handle Changing Fields
    handleFieldsChange = input => e => [
        this.state({[input]: e.target.value})
    ]


    render() {
        const { step } = this.state;
        const { firstName, lastName, eMail, occupation, city, bio, phone } = this.state;
        const values = { firstName, lastName, eMail, occupation, city, bio, phone };

        // Condational Rendering with Switch
        switch (step) {
            case 1:
                return (
                    // <UserDetails
                    //     nextStep = {this.nextStep}
                    //     handleFieldsChange = {this.handleFieldsChange}
                    //     values = {values}
                    // ></UserDetails>
                    <h1>User Details</h1>
                )
                break;

            case 2:
                return (
                    <h1>Personal Details</h1>
                )
                break;
            case 3:
                return (
                    <h1>Confirmation</h1>
                )
                break;
            case 4: 
                return (
                    <h1>Submission Done</h1>
                )
            default:
                return (
                    <h1>Something went wrong! <br/>Kindly clear cashe & cookies & refresh </h1>
                )
        }
    }
}

export default UserForm
