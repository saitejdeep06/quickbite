function Checkout() {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890",
      amount: 50000,
      currency: "INR",
      name: "QuickBite",
      description: "Food Order Payment",

      handler: function () {
        alert("Payment Successful 🎉");
      },

      prefill: {
        name: "Sai",
        email: "sai@test.com",
        contact: "9999999999",
      },

      theme: {
        color: "#000000",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Checkout Page 💳</h1>

      <button
        onClick={handlePayment}
        style={{
          marginTop: "20px",
          background: "green",
          color: "white",
          padding: "15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Pay With Razorpay
      </button>
    </div>
  );
}

export default Checkout;