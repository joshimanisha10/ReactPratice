import { useEffect, useState, useCallback, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setlength] = useState(8);
  const [numberFormat, setnumberFormat] = useState(false);
  const [character, setcharacter] = useState(false);
  const [password, setpassword] = useState();

  //useRef
  const refpassword = useRef(null);

  // Creating Random password Function
  const randomPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let char = "~`!@#$%^&*()_+-={}[]:;'<>?,./|\\";

    if (numberFormat) str += number;
    if (character) str += char;

    for (let index = 1; index <= length; index++) {
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }

    // console.log(pass, length, numberFormat, character);
    setpassword(pass);
  }, [length, numberFormat, character, setpassword]);

  // Password will generate only length, numberFormat, character, setpassword, randomPassword is used
  useEffect(() => {
    randomPassword();
  }, [length, numberFormat, character, setpassword, randomPassword]);

  //Copy to clipboard and select text Function
  function copyText() {
    //Userslection
    refpassword.current?.select();

    //to select range as per the maxium require
    // refpassword.current?.setSelectionRange(0, 3);

    //to copy to clipboard
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div
        className="w-full max-w-sm"
        style={{ margin: "auto", padding: "20px" }}
      >
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="mb-4 font-bold underline"> PASSWORD GENERATOR</h1>
          <div className="mb-4" style={{ display: "flex" }}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={password}
              placeholder={password}
              ref={refpassword}
              readOnly
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={copyText}
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="Range"
                min={8}
                max={15}
                value={length}
                onChange={(e) => setlength(e.target.value)}
              />
              <span className="text-sm">Length {length}</span>
            </label>
            <label className="md:w-1/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value={numberFormat}
                onChange={() => setnumberFormat(!numberFormat)}
              />
              <span className="text-sm">Number</span>
            </label>
            <label className="md:w-1/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value={character}
                onChange={() => setcharacter(!character)}
              />
              <span className="text-sm">Character</span>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
