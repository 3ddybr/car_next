import React from 'react';
import SelectTiposMarcas from '../../components/SelectTiposMarcas';
import { dataMarcas } from '../../utils/dataMarcas';
import { dataTipos } from '../../utils/dataTipoCarros';
import styles from './styles.module.scss';

export default function Veiculos (){
    return (
        <div className={styles.veiculosContainer}>
            <form action="">
                <div className={styles.opcionais}>
                    <input type="checkbox" name="destaque" id="destaque"/>
                    <label>
                        "DESTAQUE" <small>Selecione para inserir na pagina principal. </small>
                    </label>
                </div>

                <SelectTiposMarcas dataOptions={dataTipos}/>
                <SelectTiposMarcas dataOptions={dataMarcas}/>

                <label>Modelo</label>
                <input></input>
                <label>Versão</label>
                <input></input>
                <label>Ano Modelo / Fabricação</label>
                <input></input>
                <label>Quilometragem</label>
                <input></input>
                <label>Cor</label>
                <input></input>
                <legend>OPCIONAIS</legend>
                <div className={styles.fieldOpcionais}>
                    <div>
                    <input type="checkbox" id="alarme" name="alarme" value="alarme"/>
                    <label>ALARME</label>
                    </div>
                    <div>
                    <input type="checkbox" id="trava-eletrica" name="trava-eletrica" value="trava-eletrica"/>
                    <label>TRAVA ELÉTRICA</label>
                    </div>
                    <div>
                    <input type="checkbox" id="som" name="som" value="som"/>
                    <label>SOM</label>
                    </div>
                    <div>
                    <input type="checkbox" id="direcao-hidraulica" name="direcao-hidraulica" value="direcao-hidraulica"/>
                    <label>DIREÇÃO HIDRÁULICA</label>
                    </div>
                    <div>
                    <input type="checkbox" id="vidro-eletrico" name="vidro-eletrico" value="vidro-eletrico"/>
                    <label>VIDRO ELÉTRICO</label>
                    </div>
                    <div>
                    <input type="checkbox" id="airbag" name="airbag" value="airbag"/>
                    <label>AIR BAG</label>
                    </div>
                    <div>
                    <input type="checkbox" id="ar-condicionado" name="ar-condicionado" value="ar-condicionado"/>
                    <label>AR CONDICIONADO</label>
                </div>
            </div>
                <label>Preço</label>
                <input></input>
                <label>Descrição</label>
                <textarea></textarea>
                <button>Inserir</button>
                <button>Excluir</button>
            </form>            
        </div>


    )
} 