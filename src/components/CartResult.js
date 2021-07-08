/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component} from 'react'
 
class CartResult extends Component {
    render() {
        var cart = this.props.cart
        return (
            <tr>
                <td colSpan={3} />
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                    >
                        Complete purchase
                        <i className="fa fa-angle-right right" />
                    </button>
                </td>
            </tr>
        )
    }

    showTotalAmount = (cart) => {
        var total =0;
        if(cart.length > 0){
            for(var i = 0; i < cart.length; i++){
                total +=cart[i].product.price * cart[i].quantity
            }
        }
        return total;
    }
}
export default CartResult;
