import { FormEvent, useEffect, useState } from "react";
import { CarsItens } from "../../components/CarsItens";
import * as Imagens from "../../services/imagens"

type Imagem={
  name: string,
  url: string,
}
  export default function Teste () {
    const [img, setImg]= useState<Imagem[]>([])
    // const [imgUnic, setImgUnic] = useState<Imagem[]>([])

    useEffect(()=>{ //useeffect pra criar a funcao onde seta no state o []
      const getImagens = async () => {
        setImg(await Imagens.getAll())
      }
      getImagens()
    },[])

    // console.log(Imagens.getAll())
    // console.log(img)

    // useEffect(()=>{
    //   const getImgUnic = async () => {
    //     setImgUnic(await Imagens.getAllUnic())
    //   }
    //   getImgUnic()
    // },)

    // console.log("console do imgUnic aqui   ",imgUnic)


    // const teste = img.filter((item)=> item.name === "fachada.jpg")
    // console.log("askdljasldjasdlas  ",teste)

    // const teste2 = teste
    // const teste3 = teste2

    // console.log("teste 2",teste2.push.toString)


    const envioForm =async (e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      const formData = new FormData(e.currentTarget)
      const file = formData.get('image') as File;

      if(file && file.size > 0) {
        let result = await Imagens.insert(file)

        if(result instanceof Error) {
          alert(`${result.name} - ${result.message}`)
        }else {
          let newImageList = [...img]
          newImageList.push(result)
          setImg(newImageList)
        }
      }

    }

  return(
    <>
       <form  method="POST" onSubmit={envioForm}>
         <input type="file"  name="image"/>
         {/* <input type="text" name="name" placeholder="nome do arquivo"/> */}
         <button>Enviar</button>
       </form>
      <img src='' alt="" />

      <div>
      {img.map((item, index)=>(
        <CarsItens key={index} name={item.name} url={item.url}/>
      )
      )}
      </div>

      <div>
        {/* <img src={} alt="" /> */}
      </div>
     </>
    )
  }


  //{img.map((item, index)=>(
  //   <ul key={item.url} >
  //     if({item.name === "fachada.jpg"}){
  //       <CarsItens url/>
  //   }{item.name}
  //   </ul>
  // ))}
