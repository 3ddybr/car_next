import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { database } from '../../services/firebase';
import styles from './styles.module.scss';

type FormData= {
  email: string;
  password: string;
}

export default function Logar (){
  // const {} = useForm<FormData>()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit (event:FormEvent) {
    event.preventDefault();

    database.collection("users")
    .add({
      email:email,
      password:password
    })

    setEmail("");
    setPassword("");

  };
console.log(email,password);
  return (

    <div className={styles.containerLogar}>

      <div className={styles.formContainerLogar}>
        <h1>LOGAR</h1>
        <form onSubmit={handleSubmit}>
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
