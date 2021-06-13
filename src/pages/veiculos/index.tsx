import styles from './styles.module.scss';

export default function Veiculos (){
    return (
        <div className={styles.veiculosContainer}>
            <form action="">
                <label>
                    "DESTAQUE" <small>Selecione para inserir na pagina principal. </small>
                </label>
                <input type="checkbox" name="destaque" id="destaque"/>
            </form>
        </div>


    )
}