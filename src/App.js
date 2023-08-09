import React, { createContext, useContext, useState } from 'react';
import './App.css';

//step-1
const OTTContext = createContext(null)  //createContext-inbuilt

function App() {
  const [netflix, setNetflix] = useState("ep1");
  return (
    <div className="App">

      {/* step-2 */}
      {/* Provider-inbuilt */}
      <OTTContext.Provider
      value={{
        netflix,
        setNetflix
        // netflix:netflix,
        // setNetflix:setNetflix
      }}
      >
        {/* step-3 */}
        <Account />
        <Tablet />

      </OTTContext.Provider>
    </div>
  );
}

export default App;

function Account() {
  return (
    <div>
      <Devices />
    </div>
  );
}

function Devices() {
  return (
    <div>
      <Phone />
      <Tv />
      <Laptop />
    </div>
  );
}

function Phone() {
  const { netflix, setNetflix } = useContext(OTTContext);
  return (
    <div>
      <h1>Phone</h1>
      <h3>Netflix watched : {netflix}</h3>
      <button
      onClick={() => setNetflix("ep2")}
      >watch</button>
    </div>
  );
}

function Tv() {
  const { netflix, setNetflix } = useContext(OTTContext);
  return (
    <div>
      <h1>Tv</h1>
      <h3>Netflix watched : {netflix}</h3>
      <button
      onClick={() => setNetflix("ep4")}
      >watch</button>
    </div>
  );
}

function Laptop() {
  const { netflix, setNetflix } = useContext(OTTContext);
  return (
    <div>
      <h1>Laptop</h1>
      <h3>Netflix watched : {netflix}</h3>
      <button
      onClick={() => setNetflix("ep6")}
      >watch</button>
    </div>
  );
}

function Tablet() {
  const { netflix, setNetflix } = useContext(OTTContext);
  return (
    <div>
      <h1>Tablet</h1>
      <h3>Netflix watched : {netflix}</h3>
      <button
      onClick={() => setNetflix("ep8")}
      >watch</button>
    </div>
  );
}


//React Context API - replacing props drilling
//a way to manage states globally
//props drilling is faster but context API is flexible
//1. creation of useContext
//2. add the providers
//3. add the subscribers
//4. use the context

// //props drilling
// function App() {
//   const [netflix, setNetflix] = useState("ep1");
//   return (
//     <div className="App">

//         <Account
//         netflix={netflix}
//         setNetflix={setNetflix}
//         />

//     </div>
//   );
// }

// export default App;

// function Account({netflix, setNetflix}) {
//   return (
//     <div>
//       <Devices
//       netflix={netflix}
//       setNetflix={setNetflix}
//       />
//     </div>
//   );
// }

// function Devices({netflix, setNetflix}) {
//   return (
//     <div>
//       <Phone
//       netflix={netflix}
//       setNetflix={setNetflix}
//       />

//       <Tv
//       netflix={netflix}
//       setNetflix={setNetflix}
//       />

//       <Laptop
//       netflix={netflix}
//       setNetflix={setNetflix}
//       />
//     </div>
//   );
// }

// function Phone({netflix, setNetflix}) {
//   return (
//     <div>
//       <h1>Phone</h1>
//       <h3>Netflix watched : {netflix}</h3>
//       <button
//       onClick={() => setNetflix("ep2")}
//       >watch</button>
//     </div>
//   );
// }

// function Tv({netflix, setNetflix}) {
//   return (
//     <div>
//       <h1>Tv</h1>
//       <h3>Netflix watched : {netflix}</h3>
//       <button
//       onClick={() => setNetflix("ep4")}
//       >watch</button>
//     </div>
//   );
// }

// function Laptop({netflix, setNetflix}) {
//   return (
//     <div>
//       <h1>Laptop</h1>
//       <h3>Netflix watched : {netflix}</h3>
//       <button
//       onClick={() => setNetflix("ep6")}
//       >watch</button>
//     </div>
//   );
// }