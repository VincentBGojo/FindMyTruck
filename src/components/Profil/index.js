import { useDispatch, useSelector } from 'react-redux';
import { typeValues } from 'src/actions/profil';

import './style.scss';

import Field from 'src/components/Forms/Field';

 const Profil = () => {

  // const for the storage data
  const data = JSON.parse(sessionStorage.getItem('key'));
  const informations = data.data;
  const role = informations.roles;
  const informationsFoodtruck = informations.user_foodtruck;
  console.log(informationsFoodtruck);
  

  // const for the state
  const nicknameProfil = useSelector(state => state.profil.nicknameProfil);
  const emailProfil = useSelector(state => state.profil.emailProfil);
  const firstnameProfil = useSelector(state => state.profil.firstnameProfil);
  const lastnameProfil = useSelector(state => state.profil.lastnameProfil);
  const streetProfil = useSelector(state => state.profil.streetProfil);
  const cityProfil = useSelector(state => state.profil.cityProfil);
  const postalCodeProfil = useSelector(state => state.profil.postalCodeProfil);
  const warning = useSelector(state=> state.profil.warning);
  const modify = useSelector(state=> state.profil.modify);

  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_INFORMATIONS',
    })
  }

  const onFieldChange = (key, value) => {
    dispatch(
      typeValues(key, value)
    );
  }

  const handleClick = (event) => {
    console.log('blabla');
    dispatch({
      type: 'SHOW_MODIFY_INFORMATIONS',
      modify:true
    })
  }
  const hideModify = (event) => {
    console.log('blabla');
    dispatch({
      type: 'HIDE_MODIFY_INFORMATIONS',
      modify:false
    })
  }
  
  return (
    <div>
    {modify===false &&
        <div className="profil">
          <div className="profil_nickname"> On est sur ton profil {informations.nickname} </div>
          <div className="profil_email"> Voici ton email {informations.email} </div>
          <div className="profil_firstname"> Voici ton prénom {informations.firstname} </div>
          <div className="profil_lastname"> Voici ton nom de famille {informations.lastname} </div>
          <div className="profil_address"> Voici ton adresse {informations.address} </div>
        </div>
        }
       


      {modify===true &&

        <form onSubmit={handleSubmit} className="profil_form"> 
          <div className='profilForm'>

            <div className='nicknameForm'>
              <Field
                form="profil"
                name="nicknameProfil"
                value={nicknameProfil}
                type="text"
                placeholder='IDENTIFIANT'
                onFieldChange={onFieldChange}
              />
            </div>

            <div className='emailForm'>
              <Field
                form="profil"
                name="emailProfil"
                value={emailProfil}
                type="text"
                placeholder="E-Mail"
                onFieldChange={onFieldChange}
              />
            </div>
              
            <div className='firstnameForm'>
              <Field
                form="profil"
                name="firstnameProfil"
                value={firstnameProfil}
                type="text"
                placeholder="Prénom"
                onFieldChange={onFieldChange}
              />
            </div>
              
            <div className='lastnameForm'>
              <Field
                form="profil"
                name="lastnameProfil"
                value={lastnameProfil}
                type="text"
                placeholder="Nom de famille"
                onFieldChange={onFieldChange}
              />
            </div>

            {role[0]==="ROLE_PRO" &&
            <div>
            
              <div className='addressForm'>
                <Field
                  form="profil"
                  name="streetProfil"
                  value={streetProfil}
                  type="text"
                  placeholder="Adresse Postale"
                  onFieldChange={onFieldChange}
                />
              </div>

              <div className='cityForm'>
                <Field
                  form="profil"
                  name="cityProfil"
                  value={cityProfil}
                  type="text"
                  placeholder="Ville"
                  onFieldChange={onFieldChange}
                />
              </div>

              <div className='postal_codeForm'>
                <Field
                  form="profil"
                  name="postalCodeProfil"
                  value={postalCodeProfil}
                  type="text"
                  placeholder="Code Postal"
                  onFieldChange={onFieldChange}
                />
              </div>
            </div>
            }
            
          </div>

          <input type="submit" className="modified_button" value="ENREGISTRER LES INFORMATIONS"></input>
        </form>
        
      }
      {modify===false &&
      <button onClick={handleClick}> Modifier les informations </button>
        }

      {modify===true &&
      <button onClick={hideModify}> Annuler les changements </button>
      }
        {warning===true &&
        <div className="warning">DECO RECO TOI SI TU VEUX VOIR LA DIFFERENCE</div>
        }
      </div>
      
      );
      
    
};

export default Profil;
