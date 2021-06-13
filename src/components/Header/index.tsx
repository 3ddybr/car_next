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
                    <select name="tipo" id="tipo">
                        <option value="">Tipo</option>
                        <option value="t1">Carro</option>
                        <option value="t2">Moto</option>
                        <option value="t3">Outros</option>
                    </select>
                    <select name="marca" id="marca">
                        <option value="">Marca</option>
                        <option value="1">AM GEN</option>
                        <option value="2">MCLAREN</option>
                        <option value="3">AGRALE</option>
                        <option value="4">ALFA ROMEO</option>
                        <option value="5">ASIA MOTORS</option>
                        <option value="6">AUDI</option>
                        <option value="7">BMW</option>
                        <option value="8">BRM</option>
                        <option value="9">BUGGY</option>
                        <option value="10">BUGRE</option>
                        <option value="11">CBT JIPE</option>
                        <option value="12">CHANGAN</option>
                        <option value="13">CHERY</option>
                        <option value="14">CADILLAC</option>
                        <option value="15">CHRYSLER</option>
                        <option value="16">CITROEN</option>
                        <option value="17">CROSS LANDER</option>
                        <option value="18">DAEWOO</option>
                        <option value="19">DAIHATSU</option>
                        <option value="20">DODGE</option>
                        <option value="21">EFFA</option>
                        <option value="22">ENGESA</option>
                        <option value="23">ENVEMO</option>
                        <option value="24">FERRARI</option>
                        <option value="25">FIAT</option>
                        <option value="26">FIBRAVAN</option>
                        <option value="27">FORD</option>
                        <option value="28">FYBER</option>
                        <option value="29">GM-CHEVROLET</option>
                        <option value="30">GREAT WALL</option>
                        <option value="31">GURGEL</option>
                        <option value="32">HAFEI</option>
                        <option value="33">HONDA</option>
                        <option value="34">HYUNDAI</option>
                        <option value="35">ISUZU</option>
                        <option value="36">JAC</option>
                        <option value="37">JINBEI</option>
                        <option value="38">JPX</option>
                        <option value="39">JAGUAR</option>
                        <option value="40">JEEP</option>
                        <option value="41">KIA MOTORS</option>
                        <option value="42">LAMBORGHINI</option>
                        <option value="43">LIFAN</option>
                        <option value="44">LOBINI</option>
                        <option value="45">LADA</option>
                        <option value="46">LAND ROVER</option>
                        <option value="47">LEXUS</option>
                        <option value="48">LOTUS</option>
                        <option value="49">MG</option>
                        <option value="50">MINI</option>
                        <option value="51">MAHINDRA</option>
                        <option value="52">MASERATI</option>
                        <option value="53">MATRA</option>
                        <option value="54">MAZDA</option>
                        <option value="55">MERCEDES-BENZ</option>
                        <option value="56">MERCURY</option>
                        <option value="57">MITSUBISHI</option>
                        <option value="58">MIURA</option>
                        <option value="59">NISSAN</option>
                        <option value="60">PEUGEOT</option>
                        <option value="61">PLYMOUTH</option>
                        <option value="62">PONTIAC</option>
                        <option value="63">PORSCHE</option>
                        <option value="64">RENAULT</option>
                        <option value="65">ROVER</option>
                        <option value="66">SSANGYONG</option>
                        <option value="67">SAAB</option>
                        <option value="68">SATURN</option>
                        <option value="69">SEAT</option>
                        <option value="70">SUBARU</option>
                        <option value="71">SUZUKI</option>
                        <option value="72">TAC</option>
                        <option value="73">TOYOTA</option>
                        <option value="74">TROLLER</option>
                        <option value="75">VW-VOLKSWAGEN</option>
                        <option value="76">VOLVO</option>
                        <option value="77">WAKE</option>
                        <option value="78">WALK</option>
                        <option value="79">SMART</option>
                        <option value="80">SHINERAY</option>
                        <option value="81">ASTON MARTIN</option>
                        <option value="82">FOTON</option>
                        <option value="83">RELY</option>
                        <option value="84">ROLLS-ROYCE</option>
                        <option value="85">DKW VEMAG</option>
                        <option value="86">LANDWIND</option>
                        <option value="87">GEELY</option>
                        <option value="88">CHANA</option>
                        <option value="89">PUMA</option>
                        <option value="90">RAM</option>
                        <option value="91">INFINITI</option>
                        <option value="92">TESLA</option>
                        <option value="93">BABY</option>
                        <option value="94">IVECO</option>
                        <option value="95">ACURA</option>
                        <option value="96">HITECH ELETRIC</option>
                    </select>
                    <button type="submit">Filtrar</button>
                </form>
            </div>
        </header>
        
        
    )
} 