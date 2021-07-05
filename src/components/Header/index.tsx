import SelectTiposMarcas from '../SelectTiposMarcas';

import { dataMarcas } from '../../utils/dataMarcas';
import { dataTipos } from '../../utils/dataTipoCarros';
import styles from './styles.module.scss';


export function Header (){
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
                <form action="">
                    <SelectTiposMarcas dataOptions={dataTipos}/>
                    <SelectTiposMarcas dataOptions={dataMarcas}/>
                    <button type="submit">Filtrar</button>
                </form>
            </div>
        </header>    
    )
} 