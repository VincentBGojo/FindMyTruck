import Field from 'src/components/Forms/Field';


import { changeValue } from 'src/actions/users';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import './style.scss';

const LoginForm = () => {

  /**
   * We get the state values in several const
   */
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);
  const logged = useSelector(state => state.user.logged);
  const registered = useSelector(state => state.register.registered);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'TRY_LOGIN'
    })
  }

  /**
   * We get the desired values to dispatch them where we need 
   */
  const dispatch = useDispatch();
  const onFieldChange = (key, value) => {
    dispatch(
      changeValue(key, value)
    );
  }
  return (
    <>
      {logged && 
      <Redirect to="/" />
      }
      <form onSubmit={handleSubmit} className="login_form">
        <div className="login_form_title">Connexion</div>
        <Field
          form="login"
          name="email"
          value={email}
          type="email"
          placeholder="E-mail"
          onFieldChange={onFieldChange}
          required='required'
        />

        <Field
          form="login"
          name="password"
          value={password}
          type="password"
          placeholder="Mot de passe"
          onFieldChange={onFieldChange}
          required='required'
        />
        <div className="login_form_forget"> <a href="">Mot de passe oublié ?</a> </div>

        <button 
        type="submit"
        className="login_form_button"
        >
          Se connecter
        </button>
        {!registered &&
        <>
          <div className="login_form_joinus"> <a href="/inscription">Rejoins-nous !</a> </div>
        </>
        }
      </form>   
    </>
     
  );
};

export default LoginForm;
