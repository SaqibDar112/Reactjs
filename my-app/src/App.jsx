import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLen] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");



  //useRef used to give refernce
  const passRef = useRef(null);
  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,101); // tell how much you want to select
    window.navigator.clipboard.writeText(password);
  }, [password])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%&";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char); //append value
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg pt-4 px-4 my-8 pb-3 text-orange-500 bg-gray-700 text-center">
        <h1 className="text-2xl text-white my-2" >Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-amber-200" placeholder="password" readOnly ref={passRef} />
          <button onClick={copyToClipBoard} className="bg-blue-500 text-white font-medium px-4 py-2 hover:bg-blue-700 shadow-md transition duration-200">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => setLen(Number(e.target.value))} />
            <label>Length: {length}</label>
          </div>
          <div>
            <input type="checkbox" onChange={() => setNumberAllowed((prev) => !prev)} />
            <label>Number</label>
          </div>
          <div>
            <input type="checkbox" onChange={() => setCharAllowed((prev) => !prev)} />
            <label>Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
