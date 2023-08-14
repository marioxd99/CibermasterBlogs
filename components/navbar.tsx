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
    <nav className="navbar navbar-light bg-light mb-25 fixed-top">
    <div className="container"> {/* Agregamos un contenedor para alinear los elementos */}
      <div className="navbar-brand">
        <h2>
          <Link href="/" className="hover:underline" style={{ color: "black" }}>
            <img src={"/assets/blog/dynamic-routing/logo.png"} alt="logo" width={"220px"} />
          </Link>
        </h2>
      </div>
      <div> {/* Mueve el interruptor al lado derecho */}
        <label className="switch">
          <input
            id="darkToggle"
            type="checkbox"
            checked={checked}
            onChange={handleDarkMode}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  </nav>
  
  );
};

