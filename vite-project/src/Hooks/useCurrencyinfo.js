import { useState, useEffect } from "react";

function useCurrencyinfo(currency) {
  console.log(currency);

  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/fe3807c76e8d7db1130025cf/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setdata(res.conversion_rates));
    // console.log(data, "data");
  }, [currency]);

  return data;
}

export default useCurrencyinfo;
