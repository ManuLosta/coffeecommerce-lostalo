import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState();
  const { signup } = useContext(AuthContext);

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    signup(data.email, data.password, data.name, data.phone).catch(error => {
      setError(error);
    });
  };

  return (
    <div className="Signup__container">
      <h3 className="Signup__title">Registrarse</h3>
      <form className="Signup">
        <label htmlFor="email">Nombre</label>
        <input onChange={handleChange} name="name" type="text" />
        <label htmlFor="password">Teléfono</label>
        <input onChange={handleChange} name="phone" type="tel" />
        <label htmlFor="email">Correo electrónico</label>
        <input onChange={handleChange} name="email" type="email" />
        <label htmlFor="password">Contraseña</label>
        <input onChange={handleChange} name="password" type="password" />
        <label htmlFor="password">Repetir contraseña</label>
        <input onChange={handleChange} name="password" type="password" />
        {error && <p className="error">{error}</p>}
        <p>
          ¿Ya tienes una cuenta?{' '}
          <span>
            <Link to="/login">Iniciar sesión</Link>
          </span>
        </p>
        <button onClick={handleSubmit}>Registrarse</button>
      </form>
    </div>
  );
};

export default Signup;
