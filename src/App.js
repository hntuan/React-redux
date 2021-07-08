/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component} from 'react'
import CartContainer from './containers/CartContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
class App extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        {/* Products */}
                        <ProductsContainer></ProductsContainer>
                        
                        {/* Message */}
                        <MessageContainer></MessageContainer>
                        
                        {/* Cart */}
                        <CartContainer></CartContainer>
                    </div>
                </main>
               
                {/* Footer */}
                <Footer></Footer>
            </div>
        )
    }
}
export default App;
