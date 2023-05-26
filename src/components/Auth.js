import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Auth({changeIng}) {//Publica
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const navigate = useNavigate();

function handleSubmit(e){
    e.preventDefault();
    const u = 'lucely@ud.edu.co';
    const c = '123456';

    if(username===u && password===c){
        console.log('-- Bienvenido -- Ingreso Correctamente');
        changeIng(true);
        navigate("/home");

    }else{
        alert('Usuario o contraseña errados');
    }
}

function handleUsername(e){
    const vr = e.target.value;
    setUsername(vr);
}

function handlePass(e){
    setPassword(e.target.value);
}

    return (
        <main role="main" class="container my-auto">
        <div class="row">
            <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                col-12">
                <h2 class="text-center">Autenticación</h2>
                <img class="img-fluid mx-auto d-block rounded"
                    src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg" alt="Alimentos" />

                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                        <label for="correo">Usuario</label>
                        <input id="correo" name="correo"
                            class="form-control" type="email"
                            placeholder="Correo electrónico"
                            onChange={handleUsername} />
                            
                    </div>
                    <div class="form-group">
                        <label for="palabraSecreta">Contraseña</label>
                        <input id="palabraSecreta" name="palabraSecreta"
                            class="form-control" type="password"
                            placeholder="Contraseña"
                            onChange={handlePass} />
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary mb-2">
                        Iniciar Sesion
                    </button>
                    <br/>
                    <a href="#">Contraseña olvidada</a>
                </form>
            </div>
        </div>
    </main>
    )
}


export function Landing(){//Publica
    return(
        <h3>Promoción</h3>
    )
}
