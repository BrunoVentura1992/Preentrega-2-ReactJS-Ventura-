import styles from "./styles.css"

const products = [
    { id: "river-plate", name: "River Plate", img: "https://http2.mlstatic.com/D_NQ_NP_966593-MLA51201400627_082022-O.webp", price: 25000, category: "clubes", description: "Camiseta River Plate campeón del mundo 1986", stock: 20 },
    { id: "argentina", name: "Argentina", img: "https://http2.mlstatic.com/D_NQ_NP_967433-MLA50732304167_072022-O.webp", price: 25000, category: "selecciones", description: "Camiseta Selección Argentina campeón del mundo 1986", stock: 20 },
    { id: "napoli", name: "Napoli", img: "https://http2.mlstatic.com/D_NQ_NP_738382-MLA47480033781_092021-O.webp", price: 25000, category: "clubes", description: "Camiseta Napoli de Diego Maradona", stock: 20 },
    { id: "independiente", name: "Independiente", img: "https://http2.mlstatic.com/D_NQ_NP_975068-MLA54973354936_042023-O.webp", price: 25000, category: "clubes", description: "Camiseta Independiente campeón Copa Libertadores 1984", stock: 20 },
    { id: "uruguay", name: "Uruguay", img: "https://http2.mlstatic.com/D_NQ_NP_935220-MLA71629288552_092023-O.webp", price: 25000, category: "selecciones", description: "Camiseta Selección Uruguay campeón Copa América 1987", stock: 20 },
    { id: "san-lorenzo", name: "San Lorenzo", img: "https://http2.mlstatic.com/D_NQ_NP_831057-MLA54407777808_032023-O.webp", price: 25000, category: "clubes", description: "Camiseta San Lorenzo campeón Nacional 1974", stock: 20 },
    { id: "velez-sarsfield", name: "Velez Sarsfield", img: "https://http2.mlstatic.com/D_NQ_NP_936488-MLA70906372773_082023-O.webp", price: 25000, category: "clubes", description: "Buzo de arquero Velez Sarsfield de José Luis Chilavert", stock: 20 },
    { id: "brasil", name: "Brasil", img: "https://http2.mlstatic.com/D_NQ_NP_873234-MLA48112302634_112021-O.webp", price: 25000, category: "selecciones", description: "Camiseta Selección Brasil campeón del mundo 1970", stock: 20 },
    { id: "holanda", name: "Holanda", img: "https://http2.mlstatic.com/D_NQ_NP_728352-MLA47148620656_082021-O.webp", price: 25000, category: "selecciones", description: "Camiseta Holanda sub-campeón del mundo 1974", stock: 20 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
      }, 2000 )
      
    });
  };