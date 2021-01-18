import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createTodo} from '../../store/actions/todoAction';
import { Redirect } from 'react-router-dom';

class CreateTodo extends Component {
    state = {
        'title':'',
        'content':''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value            
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state);
        this.props.history.push('/')
    }
    render() {
        const {auth,authError} = this.props;
        if(!auth.uid && auth.isLoaded) return <Redirect to='/signin' />

        return (
             <div className="container">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3"> Create new todo</h5>
                    <div className="input-field">
                        <input id="title" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Description</label>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light offset" type="submit" name="action">Create
                        </button>
                        <div className="red-text center">
                            {{authError} ? <p>{authError}</p>: null}
                        </div>
                    </div>

                </form>
            </div>
                    
        )
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         createTodo:(todo) => dispatch(createTodo(todo))
//     }
// }

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
        
    }
}
export default connect(mapStateToProps, {createTodo})(CreateTodo)
