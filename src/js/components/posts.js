import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postsActions';

class Posts extends Component {
    constructor(props) {
        super(props);
       /* //scope your methods, as needed
          method() {...}
          //access by:   this.method
          //or
          this['method'] = this['method'].bind(this); 
       */

        //local state, non-redux
        this.state = {}; //this.setState({key: val, ...});

    }
//some other life cycle methods: getDerivedStateFromProps, shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidMount, componentDidUpdate, componentWillUnmount, componentWillMount...
/*...             ...
    methods go here
    ...             ...*/
    render() {
        return (
            <div>
                <h3>Example text!</h3>
                <textarea onChange={()=>0} value={JSON.stringify(this.props.posts)}></textarea>
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    //propName: PropTypes['type'] || PropTypes.type || PropTypes['type'].isRequired
    //fetchPosts: PropTypes['func'] || PropTypes.func || PropTypes.func.isRequired
};

const mapPropsToState = state => ({
    posts: state.posts.posts
});

export default connect(mapPropsToState, {fetchPosts, /* other functions to add to props */})(Posts);