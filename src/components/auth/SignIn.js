import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signIn} from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';

class SignIn extends Component {
    state = {
        'email':'',
        'password':''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value            
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const {authError,auth} = this.props;
        if(auth.uid) return <Redirect to='/' />

        return (
             <div className="container">
             {
                 auth.isLoaded ? (
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3"> Sign In</h5>
                    <div className="input-field">
                        <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light offset" type="submit" name="action">Submit
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
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credentialss) => dispatch(signIn(credentialss))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
