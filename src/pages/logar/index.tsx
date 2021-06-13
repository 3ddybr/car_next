import styles from './styles.module.scss';

export default function Logar (){
    return (
        
        <div className={styles.containerLogar}>
            
            <div className={styles.formContainerLogar}>
                <h1>LOGAR</h1>
                <form action="">
                    <input type="email" placeholder="E-mail"></input>
                    <input type="password" placeholder="Senha"></input>
                    <button type="submit">Logar</button>
                </form>
            </div>
        </div>
        
    )
}