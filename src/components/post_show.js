import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index'


class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost( id );
    }


    render() {
        const { post } = this.props;
        if(!post){
            return <div>LOADING...</div>
        }
        return (
            <div>
                <h3>{ post.title }</h3>s
                <h6>Categories: { post.tags }</h6>
                <p>{ post.content }</p>
            </div>
        );
    }
}

function MapStateToProps( { posts }, ownProps ) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect( MapStateToProps, { fetchPost } )( PostShow );