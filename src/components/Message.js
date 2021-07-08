/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component} from 'react'
 
class Message extends Component {
    render() {
        var message = this.props.message;
        return (
            <h3>
                <span className="badge amber darken-2">
                    {message}
                </span>
            </h3>
        )
    }
}
export default Message;
