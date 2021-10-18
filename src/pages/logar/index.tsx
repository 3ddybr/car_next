import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import styles from './styles.module.scss';

import {addDoc, collection, getDocs} from 'firebase/firestore'
import { firestoreDB} from '../../services/firebase';


export default function Logar (){
  // const {} = useForm<FormData>()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router= useRouter()

// funcao para criar o usuario no db tabela users
  async function handleSubmit (event:FormEvent) {
    event.preventDefault();
    const usersCol = collection(firestoreDB, 'users');
    addDoc(usersCol ,{
      email:email,
      password:password
    })
    setEmail("");
    setPassword("");
  };
//Termina funcao para criar o usuario no db tabela users

//funcao para login---------------
async function SignIn (event: FormEvent) {
  event.preventDefault();

    const usersCol = collection(firestoreDB, 'users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    console.log(userList)


  if (email === "" || password === "" ){
    return ;
  }else{
    userList.forEach(function(valor) {
      if (valor.email === email){
        if(valor.password === password){
          return(
          // se usuário autenticado direciona para a pagina de inserir veículos
            router.push(`/veiculos`)
          )
        }
      }
        // console.log("Console Log email aquii  ", "email ",valor.email, "senha ",valor.password)
    })
  }
}
//termina funcao para login ---------------

  return (
    <div className={styles.containerLogar}>
      <div className={styles.formContainerLogar}>
        <h1>LOGAR</h1>
        <form onSubmit={SignIn}>
          <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />

          <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event)=> setPassword(event.target.value)}
          />
          <button type="submit">Logar</button>
        </form>
      </div>
    </div>

    )
  }




  // async function SignIn (event: FormEvent) {
  //   event.preventDefault();

  //   if (email === "" || password === "" ){
  //     return;
  //   }
  //   await database.collection("users").get().then((querySnapshot) =>{
  //     querySnapshot.forEach((doc)=> {
  //       if (doc.data().email === email){
  //         if (doc.data().password === password){
  //           return(
  //             // se usuário autenticado direciona para a pagina de inserir veículos
  //             router.push(`/veiculos`)
  //           )
  //         }
  //       }
  //       // console.log(doc.id, "==", doc.data().email)
  //     })

  //   })
  // }
