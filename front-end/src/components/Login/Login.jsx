import { useState } from "react";
import axios from "axios";

import ownStyle from "./Login.module.css";

const Login = () => {
    const API_URL = import.meta.env.VITE_API_URL;

    // Creating a "click event" to change the background
    const [isRegisterMode, setRegisterMode] = useState(false);

    const handleModeOn = () => { setRegisterMode(true); };
    const handleModeOff = () => { setRegisterMode(false); };

    // Communicating this "component" with the "user_accounts" route.
    const [userCredentials, setUserCredentials] = useState({ e_mail: "", user_password: "" });

    const handleSignIn = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}` + "/auth/user_accounts", userCredentials)
            .then(result =>  console.log(result))
            .catch(exception => console.log("Error fetching and parsing data", exception));
    };

    return (
        <>
            {/** main-container */}
            <div role="main" className={`flex-grow-1 ${ownStyle["main-container"]} ${(isRegisterMode) ? ownStyle["register-mode"] : ""}`}>
                {/** form-section */}
                <div className={`${ownStyle["form-section"]}`}>
                    {/** inside-container */}
                    <div className={`${ownStyle["inside-container"]}`}>
                        {/** sign-in-form */}
                        <form onSubmit={handleSignIn} autoComplete="off" className={`${ownStyle["sign-in-form"]}`}>
                            <h3 style={{ color: "rgb(0, 74, 77)" }} className="fw-bold mb-4">Inicio de sesión</h3>

                            {/** form-floating */}
                            <div className="form-floating w-100 mb-2">
                                <input type="email" onChange={(event) => setUserCredentials({ ...userCredentials, e_mail: event.target.value })} id="sign-in.e-mail" placeholder="name@example.com" className="form-control" />
                                <label htmlFor="sign-in.e-mail">Correo electrónico</label>
                            </div>

                            {/** form-floating */}
                            <div className="form-floating w-100 mb-4">
                                <input type="password" onChange={(event) => setUserCredentials({ ...userCredentials, user_password: event.target.value })} id="sign-in.user-password" placeholder="Password" className="form-control" />
                                <label htmlFor="sign-in.user-password">Contraseña del usuario</label>
                            </div>

                            <button type="submit" className="btn btn-sm w-75 fs-6 mb-3 p-2">Iniciar sesión</button> {/** submit-button */}

                            {/** media-section */}
                            <p style={{ color: "rgb(0, 74, 77)" }} className="mt-2 mb-2">O puedes <b>iniciar sesión</b> con alguna red social</p>

                            <div className={`${ownStyle["media-section"]}`}>
                                <button type="button" className={`${ownStyle["media-icon"]}`}><i className="bi bi-google"></i></button>
                                <button type="button" className={`${ownStyle["media-icon"]}`}><i className="bi bi-facebook"></i></button>
                                <button type="button" className={`${ownStyle["media-icon"]}`}><i className="bi bi-twitter-x"></i></button>
                            </div>
                        </form>

                        {/** sign-up-form */}
                        <form autoComplete="off" className={`${ownStyle["sign-up-form"]}`}>
                            <h3 style={{ color: "rgb(0, 74, 77)" }} className="fw-bold mb-5">Nuevo usuario</h3>

                            {/** form-floating */}
                            <div className="form-floating w-100 mb-2">
                                <input type="text" id="sign-up.username" placeholder="User123_Name456" className="form-control" />
                                <label htmlFor="sign-up.username">Nombre de usuario</label>
                            </div>

                            {/** form-floating */}
                            <div className="form-floating w-100 mb-2">
                                <input type="email" id="sign-up.e-mail" placeholder="name@example.com" className="form-control" />
                                <label htmlFor="sign-up.e-mail">Correo electrónico</label>
                            </div>

                            {/** form-floating */}
                            <div className="form-floating w-100 mb-4">
                                <input type="password" id="sign-up.user-password" placeholder="Password" className="form-control" />
                                <label htmlFor="sign-up.user-password">Contraseña del usuario</label>
                            </div>

                            {/** checkbox-input */}
                            <div className="form-check mb-3">
                                <input type="checkbox" value="" id="terms-conditions" className="form-check-input" />
                                <label htmlFor="terms-conditions" style={{ color: "rgb(0, 74, 77)" }} className="form-check-label">¿Aceptas los términos y condiciones?</label>
                            </div>

                            <button type="submit" className="btn rounded-0 btn-sm w-75 fs-6 mb-4 p-2">Crear cuenta</button> {/** submit-button */}

                            {/** media-section */}
                            <p style={{ color: "rgb(0, 74, 77)" }} className="mb-2">O puedes <b>crear tu cuenta</b> con alguna red social</p>

                            <div className={`${ownStyle["media-section"]}`}>
                                <button type="button" className={`${ownStyle["media-icon"]}`}><i className="bi bi-google"></i></button>
                                <button type="button" className={`${ownStyle["media-icon"]}`}><i className="bi bi-facebook"></i></button>
                                <button type="button" className={`${ownStyle["media-icon"]}`}><i className="bi bi-twitter-x"></i></button>
                            </div>
                        </form>
                    </div>
                </div>

                {/** background-section */}
                <div className={`${ownStyle["background-section"]}`}>
                    {/** main-background */}
                    <div className={`${ownStyle["inside-container"]} ${ownStyle["main-background"]}`}>
                        <div className={`${ownStyle["background-content"]}`}>
                            <h2 className="fw-bold">
                                <span style={{ color: "rgb(0, 74, 77)" }}>Únete a </span>
                                <span className="text-white">nuestra comunidad.</span>
                            </h2>

                            <p style={{ color: "rgb(0, 74, 77)" }}>Al unirte, tendrás acceso a contenido exclusivo, eventos especiales y muchas oportunidades para conectarte con personas con intereses similares.</p>

                            <button type="button" className="btn btn-sm w-75 rounded-0 border p-2" onClick={handleModeOn}>
                                <span className="fs-6">
                                    <i className="bi bi-layout-text-window"></i> Inicia sesión
                                </span>
                            </button>
                        </div>
                        <img src="./images/main-background.svg" alt="Main background" className={`${ownStyle["background-image"]}`} />
                    </div>

                    {/** alternative-section */}
                    <div className={`${ownStyle["inside-container"]} ${ownStyle["alternative-background"]}`}>
                        <div className={`${ownStyle["background-content"]}`}>
                            <h2 className="fw-bold">
                                <span className="text-white">¿Eres</span>
                                <span style={{ color: "rgb(0, 74, 77)" }}> miembro?</span>
                            </h2>

                            <p style={{ color: "rgb(0, 74, 77)" }}>Ingresa con tus credenciales para acceder a todas las ventajas que ofrecemos. ¡Gracias por ser parte de nuestra comunidad!</p>

                            <button type="button" className="btn btn-sm w-75 rounded-0 border p-2" onClick={handleModeOff}>
                                <span className="fs-6">
                                    <i className="bi bi-layout-text-window-reverse"></i> Nueva cuenta
                                </span>
                            </button>
                        </div>
                        <img src="./images/alternative-background.svg" alt="Alternative background" className={`${ownStyle["background-image"]}`} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;