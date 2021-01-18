import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';
import {signUp} from '../../store/actions/authAction'

class SignUp extends Component {
    state = {
        'email':'',
        'password':'',
        'firstName':'',
        'lastName':''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value            
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const {auth,authError} = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
             <div className="container">
             {
                 auth.isLoaded ? (
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3"> Sign Up</h5>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="input-field">
                        <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light offset" type="submit" name="action">Sign UP
                        </button>
                        <div className="red-text center">
                            {{authError} ? <p>{authError}</p>: null}
                        </div>
                    </div>

                </form>
                ):(
                    <ReactLoading
                        className="spinner"
                        type="bubbles"
                        color="grey"
                        height="5%"
                        width="5%"
                    /> 
                 )
             }
            </div>
                    
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) =>dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
