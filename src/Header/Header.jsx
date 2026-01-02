import './Header.css';
// import { useState } from "react";
import logo from "../images/logo.svg";
import headerimg from "../images/illustration-working.svg";
import shortenimg from "../images/bg-shorten-desktop.svg";
import brandimg from "../images/icon-brand-recognition.svg";
import detailedimg from "../images/icon-detailed-records.svg";
import customizableimg from "../images/icon-fully-customizable.svg";
import boostimg from "..//images/bg-boost-desktop.svg";
import footerlogo from "..//images/footerlogo.svg";
import facebookimg from "..//images/icon-facebook.svg";
import instagramimg from "..//images/icon-instagram.svg";
import pinterestimg from "..//images/icon-pinterest.svg";
import twitterimg from "..//images/icon-twitter.svg";
import hamburger from "..//images/icon-hamburger.svg";

const apiKey = process.env.REACT_APP_BITLY_API_KEY;

function Header() { 
    async function short() {
        const input = document.querySelector("input");
        if(!input.value.trim()){
            document.querySelector("input").style.border = "1px solid red";
            alert("error");
        }else {
            const longurl = input.value;
            alert("Success");
            const response = await fetch("https://api-ssl.bitly.com/v4/shorten",{
                method: "POST", 
                headers: {
                    "Authorization" : `Bearer ${apiKey}`,
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({long_url:longurl})
            });
            const data = await response.json();
            input.style.border ="1px solid transparent";
            const div = document.createElement("div");
            const h4 = document.createElement("h4");
            h4.innerHTML = input.value;
            const nav = document.createElement("nav");
            const p = document.createElement("p");
            p.innerHTML = data.link || "error";

            const button = document.createElement("button");
            button.innerHTML = "Copy";
            button.onclick = function() {
                button.innerHTML = "Copied!";
                button.style.backgroundColor = "hsl(260, 8%, 14%)";
            }
            
            div.append(h4, nav);
            nav.append(p, button);
            document.querySelector("summary").appendChild(div);
            input.value = "";
        }
    }

    function hambur() {
        const mobile = document.getElementById("mobile"); // MOVED INSIDE THE FUNCTION
        if(mobile && mobile.style.display === "none") {
            mobile.style.display = "flex";
        } else if(mobile) {
            mobile.style.display = "none";
        }
    }

  return (
    <div id="header">
        <header>
            <div>
                <img src={logo} alt="logoimg" />
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </div>

            <div>
                <button>Login</button>
                <button style={{backgroundColor:"hsl(180, 66%, 49%)", color:"#fff" }}>Sign Up</button>
                <img src={hamburger} alt="hamburgerimg" id="hamburger" onClick={hambur}/>
            </div>
        </header>

        <section id="mobile" style={{display: "none"}}>
                <div>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                </div>
                <hr/>
                <div>
                    <p>Login</p>
                    <button>Sign up</button>
                </div>
        </section>

        {/* ... rest of your JSX ... */}
        <div>
            <nav>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </nav>
            <img src={headerimg} alt="headerimgg" />
        </div>

        <aside style={{backgroundImage:`url(${shortenimg})`, width:"90%", minHeight:"20vh", backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center" }} >
            <input type="text" placeholder="Shorten a link here..."  /> 
            <button onClick={short}>Shorten It!</button>
        </aside>

        <section id="section">
             <summary></summary> 
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div>
                <nav style={{ marginTop: "-70px"}}>
                    <img src={brandimg} alt="brandimg" />
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </nav>
                <nav style={{marginTop: "-30px"}} className="line">
                    <img src={detailedimg} alt="detailedimg" />
                    <h2>Detailed Records</h2>
                    <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </nav>
                <nav className="line">
                    <img src={customizableimg} alt="customizableimg" />
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </nav>
            </div>
        </section>

        <main style={{backgroundImage: `url(${boostimg})`, width: "100%", minHeight: "30vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "hsl(255, 11%, 22%)"}}>
            <h1>Boost your link today</h1>
            <button>Get Started</button>
        </main>

        <footer>
            <article><img src={footerlogo} alt="logoimg" /></article>
            <article>
                <h5>Features</h5>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </article>
            <article>
                <h5>Resources</h5>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </article>
            <article>
                <h5>Company</h5>
                <p>About</p>
                <p>Our Teams</p>
                <p>Careers</p>
                <p>Contact</p>
            </article>
            <article>
                <img src={facebookimg} alt="facebookimg" />
                <img src={twitterimg} alt="twitter" />
                <img src={pinterestimg} alt="pinterestimg" />
                <img src={instagramimg} alt="instagramimg" />
            </article>
        </footer>
    </div>
  );
}

export default Header;