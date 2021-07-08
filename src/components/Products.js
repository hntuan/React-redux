/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component} from 'react';

class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* Product */}
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Products;
