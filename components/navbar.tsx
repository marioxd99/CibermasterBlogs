import Link from "next/link";
import { useEffect, useState } from "react";


export default function NavBar () {
  const [checked, setCheck] = useState(false);
  
  useEffect(() => {
    const storedValue = window.localStorage.getItem('checked');
    if (storedValue !== null) {
      setCheck(storedValue === 'true');
    }
  }, []);

  const handleDarkMode = (event) => {
    const isChecked = event.target.checked;
    window.localStorage.setItem("checked", isChecked);
    setCheck(isChecked);

    if (event.target.checked) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
       
      }
  };

  useEffect(() => {
   setCheck(JSON.parse(window.localStorage.getItem('checked'))) 
  })

  return (
    <nav
      className="navbar navbar-light bg-light mb-25"
      style={{ top: "0", width: "100%", position: "fixed", zIndex: "100" }}
    >
      <h2 className="ml-20">
      <Link href="/" className="hover:underline" style={{color: "black"}}>
        CiberMaster
      </Link>
      </h2>
      <h4 className="text-center" style={{fontSize: "20px", fontFamily: "sans-serif", color: "black"}}>
        Blog donde aprender a resolver maquinas y tenicas hacking
      </h4>
      <label
        className="switch mr-10"
        style={{ display: "inline-block", marginLeft: "25px" }}
      >
        <input
          id="darkToogle"
          type="checkbox"
          checked={checked}
          onChange={handleDarkMode}
        ></input>
        <span className="slider round"></span>
      </label>
    </nav>
  );
};

