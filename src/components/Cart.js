/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component} from 'react'

class Cart extends Component {
    render() {
        var children = this.props.children
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th />
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {/* CART-ITEM */}
                            { children }

                            {/* CART-RESULT */}
                            
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}
export default Cart;
