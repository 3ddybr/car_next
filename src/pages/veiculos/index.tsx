import React from 'react';
import SelectTiposMarcas from '../../components/SelectTiposMarcas';
import { dataMarcas } from '../../utils/dataMarcas';
import { dataTiposCarros } from '../../utils/dataTipoCarros';
import styles from './styles.module.scss';

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { database } from '../../services/firebase'

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
    price:string;
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

const schema = yup.object().shape({
    destaque:yup.boolean(),

    title:  yup.string().required('Titulo e obrigatório'),
    // img: yup.string().required(),

    type:yup.string().required("Tipo de veículos obrigatório"),
    brand: yup.string().required("Marca de veículos obrigatório"),  //marca

    model: yup.string().required('Modelo e obrigatório'),
    version_car: yup.string().required('Versão e obrigatório'),
    year_model: yup.string().required('Ano Modelo/ Fabricação e obrigatório'),    //ano/model
    mileage: yup.string().required('Quilometragem e obrigatório'), //quilometragem
    // power: yup.string().required('Potencia e obrigatório'),  //potencia
    color_car: yup.string().required('Cor e obrigatório'),
    price:yup.string().required('Preço e obrigatório'),
    description:yup.string().required('Descrição e obrigatório'),

      alarme: yup.boolean(),
      trava_eletrica:yup.boolean(),
      som:yup.boolean(),
      direcao_hidraulica:yup.boolean(),
      vidro_eletrico:yup.boolean(),
      airbag:yup.boolean(),
      ar_condicionado:yup.boolean(),

})

export default function Veiculos (){

  const {register, handleSubmit,  control , formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(control)
  const handleSubmitForm = async (data: FormData) => {
    // console.log("daddos vem aquiiiii",data)
    // event.preventDefault();
      // console.log(event);
    const vehiclesRef = database.collection('vehicles')
    // console.log(`aqui esta `,vehiclesRef)
    try {
      const doc = await vehiclesRef.add({data})
      // console.log('Documento escrito com id: ', doc.id)
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  return (
    <div className={styles.veiculosContainer}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
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
        <p>{errors.title?.message}</p>

        <SelectTiposMarcas dataOptions={dataTiposCarros}  control={control} name="type" />
        <p>{errors.type?.message}</p>
        <SelectTiposMarcas dataOptions={dataMarcas} control={control} name="brand"/>
        <p>{errors.brand?.message}</p>


        <label>Modelo</label>
        <input
          {...register("model")}
          id="model"
        />
        <p>{errors.model?.message}</p>

        <label>Versão</label>
        <input
          {...register("version_car")}
          id="version_car"
        />
        <p>{errors.version_car?.message}</p>

        <label>Ano Modelo / Fabricação</label>
        <input
          {...register("year_model")}
          id="year_model"
        />
        <p>{errors.year_model?.message}</p>

          <label>Quilometragem</label>
        <input
          {...register("mileage")}
          id="mileage"
        />
        <p>{errors.mileage?.message}</p>

        <label>Cor</label>
        <input
          {...register("color_car")}
          id="color_car"
        />
        <p>{errors.color_car?.message}</p>

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
        <p>{errors.price?.message}</p>

        <label>Descrição</label>
        <textarea {...register("description")}/>
          <p>{errors.description?.message}</p>

        <button type="submit" >Inserir</button>
        <button>Excluir</button>
      </form>
    </div>
  )
}
