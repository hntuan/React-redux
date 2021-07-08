/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';

class MessageContainer extends Component {
    render() {
        var message = this.props.message;
        return (
           <Message message={message}/>
        )
    }  
}

MessageContainer.propTypes  = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = state =>{
    return {
        message: state.message,
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
