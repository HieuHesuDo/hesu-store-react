import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState9({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target; //Lấy ra value và name từ target
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Tôi đã có tài khoản</h2>
        <span>Đăng nhập bằng email hoặc tài khoản Google</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" buttonText='Đăng nhập'></CustomButton>
            <CustomButton onClick={signInWithGoogle} buttonText='Đăng nhập với Google' isGoogleSignIn>
              {" "}
              Đăng nhập với Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
