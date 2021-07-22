import SelectTiposMarcas from '../SelectTiposMarcas';

import { dataMarcas } from '../../utils/dataMarcas';
import { dataTiposCarros } from '../../utils/dataTipoCarros';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';


export function Header (){
  const {register, handleSubmit,  control , formState:{errors} } = useForm({
    // resolver: yupResolver(schema),
  });
  const handleSubmitForm = (event) => {
    return(
      console.log(event)
    )
  }
    return(
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <div>
                <h1>AUTO FEST CAR</h1>
                <span>Traga seu carro que fazemos negócio</span>
            </div>
            <img src="/images/logocar.png" alt="logocar" />
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <SelectTiposMarcas dataOptions={dataTiposCarros} control={control} name="type" />
            <SelectTiposMarcas dataOptions={dataMarcas} control={control} name="brand"/>
            <button type="submit">Filtrar</button>
          </form>
        </div>
      </header>
    )
}
