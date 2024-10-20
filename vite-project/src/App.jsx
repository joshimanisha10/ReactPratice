// import BGchanger from "./Components/BGchanger";
// import Card from "./Components/Card";
// import Counter from "./Components/Counter";
import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyinfo from "./Hooks/useCurrencyinfo";
// import PasswordGenerator from "./Components/PasswordGenerator";

function App() {
  // let cardObject = {
  //   a: {
  //     names: "Chai aur Code",
  //     para: "lorem10",
  //   },
  //   b: {
  //     names: "Manisha joshi",
  //     para: "lorem10",
  //   },
  // };

  //CurrencyProject
  const [amount, setamount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);
  const [from, setfrom] = useState("USD");
  const [to, setto] = useState("INR");

  //Customhook use

  // Sending currencyinfo to hooks
  const currencyInfo = useCurrencyinfo(from);
  // console.log(
  //   currencyInfo[to],
  //   currencyInfo[from],
  //   currencyInfo,
  //   "currencyInfo"
  // );

  // getting option to choose country
  const options = Object.keys(currencyInfo);
  // console.log(options, "Option");

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  // Swapping From to to
  const swap = () => {
    console.log("clicked");
    setfrom(to);
    setto(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };

  return (
    <>
      {/* <Counter /> */}
      {/* <Card obj={cardObject} />
      <Card obj={cardObject} /> */}
      {/* <BGchanger /> */}
      {/* <PasswordGenerator /> */}
      {/* <InputBox /> */}
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setfrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setamount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setto(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
