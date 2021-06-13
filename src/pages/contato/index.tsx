import styles from './styles.module.scss';

export default function Contato (){
    return (
        <div className={styles.containerContato}>
            <img src="/images/imgcontato.jpg" alt="contato" />
            <h1>FALE CONOSCO E TIRE SUAS DUVIDAS</h1>

            <div className={styles.formContato}>
                <form action="" >
                    <p>Nome</p>
                    <input type="text" required></input>
                    <p>Whatsapp</p>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        
                        pattern="[0-9]{3}-[0-9]{5}-[0-9]{4}"
                        required
                        placeholder=" xxx-xxxxx-xxxx"
                        ></input>
                    <textarea name="msg" required></textarea>
                    <button type="submit">Enviar</button>

                    <span> Avenida Alameda das Travessas, nº 111, Edifício Bosque do Cerrado, apartamento 2222 - Bairro dos Barris. Salvador - Bahia. CEP: 40000-000.
                        Whatsapp (28) 655465666
                        Email: asdwwssww@gmail.com                
                    </span>
                </form>
            </div>
            
        </div>

    )
}