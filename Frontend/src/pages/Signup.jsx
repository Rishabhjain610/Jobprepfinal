
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from '../components/landingage/Navbar';
import Footer from '../components/landingage/Footer';

import "../css/Signup_Login.css"

const Signup = () => {

    const navigate = useNavigate();
    // const [L_Name, setL_Name] = useState("");
    const container = document.getElementById('container');
    const [S_Name, setS_Name] = useState("");
    const [S_Email, setS_Email] = useState("");
    const [S_Password, setS_Password] = useState("");

    async function Signup_post() {


        if (S_Name === "" ||
            S_Email === "" ||
            S_Password === "") {
            alert("Please fill all the fields");
            return;
        }
        const res = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: S_Name, email: S_Email, password: S_Password })
        })
        console.log("res.status = ", res.status);
        if (res.status === 200) {
            alert("Signup Successfull");

        }
        if (res.status === 400) {
            alert("Email already exists");
            return;
        }


    }
    function Swap_Signin() {
        navigate("/signin");
    }

    return (
        <>
            <Navbar />
            <div class="container right-panel-active" id="container">
                <div class="form-container sign-up-container">
                    <form class="form" action="#">
                        <h1 class="h1">Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="a social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="a social"><i class="fa-brands fa-google"></i></a>
                            <a href="#" class="a social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span class="class">or use your email for registration</span>
                        <input value={S_Name} onChange={(e) => setS_Name(e.target.value)} class="input" type="text" placeholder="Name" />
                        <input value={S_Email} onChange={(e) => setS_Email(e.target.value)} class="input" type="email" placeholder="Email" />
                        <input value={S_Password} onChange={(e) => setS_Password(e.target.value)} class="input" type="password" placeholder="Password" />
                        <button onClick={() => { Signup_post() }} class="button">Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form class="form" action="#">
                        <h1 class="h1">Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="a social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="a social"><i class="fa-brands fa-google"></i></a>
                            <a href="#" class="a social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span class="class">or use your account</span>
                        {/* <input value={L_Email}onChange={(e)=>setL_Email(e.target.value)} class="input" type="email" placeholder="Email" /> */}
                        {/* <input value={L_Password}onChange={(e)=>setL_Password(e.target.value)} class="input" type="password" placeholder="Password" /> */}
                        <a class="a" href="#">Forgot your password?</a>
                        {/* <button onClick={()=>Swap_Signin()} class="button">Sign In</button> */}
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1 class="h1">Welcome Back!</h1>
                            <p class="para12">To keep connected with us please login with your personal info</p>
                            <button class="button ghost" id="signIn" onClick={() => Swap_Signin()}>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1 class="h1">Hello, Friend!</h1>
                            <p class="para12">Enter your personal details and start journey with us</p>
                            {/* <button onClick={()=>Swap_Signup()} class="button ghost" id="signUp">Sign Up</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Signup