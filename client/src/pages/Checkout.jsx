// client/src/pages/Checkout.jsx

function Checkout() {
  const payNow = () => {
    alert("Payment Successful");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">
          Checkout
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-4 rounded-xl mb-5"
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full border p-4 rounded-xl mb-5"
        />

        <button
          onClick={payNow}
          className="bg-orange-500 hover:bg-orange-600 text-white w-full py-4 rounded-xl text-xl font-semibold"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;