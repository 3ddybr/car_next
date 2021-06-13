import SelectMarca from '../SelectMarca';
import SelectTipo from '../SelectTipo';
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
                    <SelectTipo/>
                    <SelectMarca/>
                    <button type="submit">Filtrar</button>
                </form>
            </div>
        </header>
        
        
    )
} 