import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField( field ) {
        const { meta: {touched, error} } = field;
        const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
        return (
            <div className={className}>
                <label>{ field.label }</label>
                <input
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
                <div className="text-help">
                    { touched ? error:'' }
                </div>
            </div>
        );
    }
     onSubmit( values ){
        console.log(values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <Field
                    label="Title"
                    name="title"
                    component={ this.renderField }
                />
                <Field
                    label="Categories"
                    name="tags"
                    component={ this.renderField }
                />
                <Field
                    label="Post content"
                    name="content"
                    component={ this.renderField }
                />
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate( values ) {
    const errors = {};
    if( !values.title ) {
        errors.title = "Enter a title";
    }
    if( !values.tags ) {
        errors.tags = "Enter a category";
    }
    if( !values.content ) {
        errors.content = "Enter a content";
    }

    return errors
}

export default reduxForm( {
    validate,
    form: 'PostsNewForm'
} )( PostsNew );