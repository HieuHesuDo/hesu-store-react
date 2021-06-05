import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, creatUserProfileDocument } from '../../firebase/firebase.utils';

import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) { //Kiểm tra xem có khớp không
      alert("Password and Confirm password dont't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword( //Tạo user mới với email và password
        email,
        password
      );
      await creatUserProfileDocument(user, { displayName }); //Tạo document cho user vừa tạo
      this.setState({  //Reset State đưa form thành rỗng
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Tôi chưa có tài khoản</h2>
        <span>Tạo tài khoản mới</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Tên"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Nhập lại password"
            required
          ></FormInput>
          <CustomButton type="submit" buttonText='Tạo tài khoản mới'></CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
