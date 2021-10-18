import styles from './styles.module.scss';

type CarsItensProps = {
  url: string;
  name: string;
}

export const CarsItens = ({url, name}:CarsItensProps) => {
  return (
    <div className={styles.container}>
      <img src={url} alt={name} />
    </div>
  )
}
