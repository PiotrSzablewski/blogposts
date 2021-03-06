import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index'
import { Link } from 'react-router-dom';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost( id );
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost( id, () => {
            this.props.history.push( '/' );
        } );
    }


    render() {
        const { post } = this.props;
        if( !post ) {
            return <div>LOADING...</div>
        }
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <Link to="/">Back to posts list</Link>
                    <button
                        className="btn btn-danger pull-xs-right"
                        onClick={ this.onDeleteClick.bind( this ) }
                    >
                        Delete this post!
                    </button>
                    <h3>{ post.title }</h3>
                    <h6>Categories: { post.categories }</h6>
                    <p>{ post.content }</p>
                </div>
            </div>
        );
    }
}

function MapStateToProps( { posts }, ownProps ) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect( MapStateToProps, { fetchPost, deletePost } )( PostShow );