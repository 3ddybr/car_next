import {Controller, Control} from 'react-hook-form'
interface TypeCar{
  value : string;
  label : string;
}
interface PropsSelect {
  dataOptions: TypeCar[];
  name: string;
  control?: Control;
}

export default function SelectTiposMarcas ({dataOptions, name, control}:PropsSelect) {

  return (
        <Controller
          render={({field})=>{
            return (
                <select name={name} {...field} >
                {dataOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
               </select>
            )
          }}
          control={control}
          name={name}
          defaultValue=""
        />
    )
}
