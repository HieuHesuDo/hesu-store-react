import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectHidden} from '../../redux/cart/cart.selector.js'
import {auth} from '../../firebase/firebase.utils'

import {selectCurrentUser} from '../../redux/user/user.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.style.css'

const Header = ({hidden, currentUser}) => (
    <div className="header-container">
        <Link to='/' className="logo-container">
            <img src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg" alt="" />
        </Link>
        <div className="options">
            <Link className='option' to='/'>HOME</Link>
            <Link className='option' to='contact'>CONTACT</Link>
            {
        currentUser ? ( //Nếu đang có user thì sẽ in ra div SignOut với sign out method
          <div className="option" onClick={() => auth.signOut()}>
            {" "} 
            ĐĂNG XUẤT{" "}
          </div>
        ) : (
          <Link className="option" to="signin">
            {" "}
            ĐĂNG NHẬP{" "}
          </Link>
        ) //Nếu không thì in ra link với đường dẫn tới trang sign in
      }
            <CartIcon></CartIcon>
        </div>
        {hidden ? null : <CartDropdown />}

    </div>
)

const mapStateToProps = state => ({
    hidden: selectHidden(state),
    currentUser: selectCurrentUser(state)
    
})

export default connect(mapStateToProps)(Header)