import React from 'react';
import {FormEvent} from 'react'
import SelectTiposMarcas from '../../components/SelectTiposMarcas';
import { dataMarcas } from '../../utils/dataMarcas';
import { dataTipos } from '../../utils/dataTipoCarros';
import styles from './styles.module.scss';

import {useForm} from 'react-hook-form'

import { firebase } from '../../services/firebase'

type FormData = {
    destaque:boolean,
    title: string;
    img:string;
    type?: string;
    brand:string;  //marca
    model?:string;
    version_car:string;
    year_model:string;    //ano/model
    mileage:string; //quilometragem
    power:string;  //potencia
    color_car:string;
    price:number;
    description:string;

    opcionais ?: {
      alarme?: boolean,
      trava_eletrica?:boolean,
      som?:boolean,
      direcao_hidraulica?:boolean,
      vidro_eletrico?:boolean,
      airbag?:boolean,
      ar_condicionado?:boolean,
    }
}
export default function Veiculos (){

  const {register, handleSubmit, setError, setValue, getValues} = useForm<FormData>();



  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
    // const db = firebase.firestore();

    // const vehiclesRef = db.collection('vehicles')
    // // console.log(`aqui esta `,vehiclesRef)
    // try {
    //   // const doc = await vehiclesRef.add({title:`teste`})
    //   const doc = await vehiclesRef.add({handleSubmit})
    //   console.log('Documento escrito com id: ', doc.id)
    // } catch (error) {
    //   console.error("Error adding document: ", error);
    // }
  }


    return (
        <div className={styles.veiculosContainer}>
          {/* <button title='buscar' onClick={handleSubimitForm}>clickme</button> */}

            <form onSubmit={handleSubmitForm}>
                <div className={styles.opcionais}>
                    <input type="checkbox" id="destaque" {...register("destaque")}/>
                    <label>
                        "DESTAQUE" <small>Selecione para inserir na pagina principal. </small>
                    </label>
                </div>
                <label>Titulo</label>
                <input
                  {...register("title")}
                />

                <SelectTiposMarcas dataOptions={dataTipos} {...register("type")}/>
                <SelectTiposMarcas dataOptions={dataMarcas} {...register("brand")}/>

                <label>Modelo</label>
                <input
                  {...register("model")}
                  id="model"
                />
                <label>Versão</label>
                <input
                  {...register("version_car")}
                  id="version_car"
                />
                <label>Ano Modelo / Fabricação</label>
                <input
                  {...register("year_model")}
                  id="year_model"
                />
                <label>Quilometragem</label>
                <input
                  {...register("mileage")}
                  id="mileage"
                />
                <label>Cor</label>
                <input
                  {...register("color_car")}
                  id="color_car"
                />
                <legend>OPCIONAIS</legend>
                <div className={styles.fieldOpcionais}>
                    <div>
                    <input type="checkbox" id="alarme" {...register("opcionais.alarme")}/>
                    <label>ALARME</label>
                    </div>
                    <div>
                    <input type="checkbox" id="trava-eletrica" {...register("opcionais.trava_eletrica")}/>
                    <label>TRAVA ELÉTRICA</label>
                    </div>
                    <div>
                    <input type="checkbox" id="som" {...register("opcionais.som")}/>
                    <label>SOM</label>
                    </div>
                    <div>
                    <input type="checkbox" id="direcao_hidraulica" {...register("opcionais.direcao_hidraulica")}/>
                    <label>DIREÇÃO HIDRÁULICA</label>
                    </div>
                    <div>
                    <input type="checkbox" id="vidro_eletrico" {...register("opcionais.vidro_eletrico")}/>
                    <label>VIDRO ELÉTRICO</label>
                    </div>
                    <div>
                    <input type="checkbox" id="airbag" {...register("opcionais.airbag")}/>
                    <label>AIR BAG</label>
                    </div>
                    <div>
                    <input type="checkbox" id="ar_condicionado" {...register("opcionais.ar_condicionado")}/>
                    <label>AR CONDICIONADO</label>
                </div>
            </div>
                <label>Preço</label>
                <input
                  {...register("price")}
                />
                <label>Descrição</label>
                <textarea {...register("description")}></textarea>
                <button type="submit" >Inserir</button>
                <button>Excluir</button>
            </form>
        </div>


    )
}
