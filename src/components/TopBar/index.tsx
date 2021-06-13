import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';


export function TopBar (){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>        
                <nav >
                    <ActiveLink activeClassName={styles.active} href='/'>
                    <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/veiculos'>
                    <a>Veículos</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/empresa'>
                    <a>Empresa</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/contato'>
                    <a>Contato</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/logar'>
                    <a>Logar</a>
                    </ActiveLink>
                </nav>
        </div>
        </header>
    )
};