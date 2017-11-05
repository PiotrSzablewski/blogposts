import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field){
        return(
          <div className="form-group">
              <label>{field.label}</label>
              <input
                  className="form-control"
                  type="text"
                  { ...field.input  }
              />
          </div>
        );
    }
    render(){
        return(
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}
function validate( values ) {
    const errors = {};
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.tags){
        errors.tags = "Enter a category";
    }
    if(!values.cotent){
        errors.cotent = "Enter a content";
    }

    return errors
}
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);