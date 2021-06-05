import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price ;
  const publishableKey =
    "pk_test_51IySeoLriCNTqOPiRlnxh8W2B9s4pxLglfICiJN2fntiRASCdd1hfOFNW949bZUMU1BVyOehSY1L4uE9G4KgbM1800Ziw0EFem";
  const onToken = (token) => {
    console.log(token);
    alert("Thanh toan thanh cong");
  };
  return (
    <StripeCheckout
      label="Thanh toán"
      name="Hesu store"
      billingAddress
      shippingAddress
      description={`Tổng tiền ${price.toLocaleString("it-IT", { style: "currency", currency: "VND" })}`}
      amount={priceForStripe}
      panelLabel="Thanh toán"
      currency='vnd'
      token={onToken}
      stripeKey={publishableKey}
      image='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg'
    />
  );
};

export default StripeCheckoutButton;
