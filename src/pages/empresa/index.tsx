import styles from './styles.module.scss';


export default function Empresa (){
  // const storageRef= storage.ref()
//   const fachadaRef = storageRef.child('imagesCars')
//   const fachada = fachadaRef.child('fachada.jpg')

// console.log('O console .log ta aqui '+ storageRef)

// console.log('Fachada Ref aquii  '+ fachadaRef)

// const fachada= fachadaRef;

// console.log('Fachada aqui  ' + fachada)

  // storageRef.child('imagesCars').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function(event) {
    //   var blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // Or inserted into an <img> element:
    // var img = document.getElementById('myimg');
    // img.src = url;
  // }).catch(function(error) {
    // Handle any errors
  // });

  return (

    <div className={styles.containerEmpresa}>
        <img src="/images/car/fachada.jpg" alt="fachada" />
        <div>
            <h1>Quem somos.</h1>
        {/* {fachada} */}
        {/* <img src={fachada} alt="asdadasdadad" /> */}
            <p>
                O importante é enviar todos os detalhes relevantes que
                poderão afetar o preço. Uma imagem diz mais do que mil
                lavras. Boas imagens geram confiança do comprador,
                assegurando lances mais altos para os carros da sua
                empresa. Recomenda-se que você tire várias fotos,
                do lado de dentro e de fora do carro, assim como
                closes de qualquer dano. Fornecer a descrição é
                simples. Você pode descrever rapidamente o carro
                usando o formulário de descrição do ,
                projetado pensando na facilidade do uso, que permite
                o fornecimento de uma descrição detalhada e precisa
                do carro da sua empresa. Isso significa que os
                compradores obtêm uma descrição precisa quando
                estão dando lances. Preencha cada seção por vez e,
                ao concluir, terá uma descrição detalhada do carro
                da sua empresa. Durante o processo, você terá
                abrangido todas as informações que poderão afetar
                o preço. Se você tiver dúvidas sobre a precisão da
                descrição do seu veículo, então recomendamos que
                comece a usar a lista de verificação do
                A lista de verificação ajuda você a analisar por
                completo o carro da sua empresa em alguns minutos.
                Se você quiser dedicar mais tempo ao seu
                negócio-chave, então deixe que o  assuma toda a
                responsabilidade pela venda dos carros da sua
                empresa. Basta selecionar Total Service e, em
                seguida, um representante da empresa do
                irá até você e documentará a condição do seu
                veículo. Leia mais sobre o Total Service.
            </p>
        </div>

    </div>

    )
}
