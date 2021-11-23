import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState();
  const { login } = useContext(AuthContext);

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    login(data.email, data.password).catch(error => {
      setError(error);
    });
  };

  return (
    <div className="Login__container">
      <h3 className="Login__title">Iniciar sesión</h3>
      <form className="Login">
        <label htmlFor="email">Correo electrónico</label>
        <input onChange={handleChange} name="email" type="email" />
        <label htmlFor="password">Contraseña</label>
        <input onChange={handleChange} name="password" type="password" />
        {error && <p className="error">{error}</p>}
        <p>
          ¿No tienes una cuenta?{' '}
          <span>
            <Link to="/signup">Registrarse</Link>
          </span>
        </p>
        <button onClick={handleSubmit}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
