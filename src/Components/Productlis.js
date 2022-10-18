import img from "../logo.svg"
import { products } from './../data';
function ProductList() {
    return(
        <section className="cards-wrapper">
       {products.map(
        (produit)=>
         <div className="card-grid-space">
        <div className="num">
          {produit.id}
        </div>
        <a
          className="card"
          href="https://codetheweb.blog/2017/10/06/html-syntax/"
          style={{
            backgroundImage:
              `url(${produit.image})`,
          }}
        >
          <div>
            <h1>{produit.title} </h1>
            <p>
              {produit.description}
            </p>
            <div className="date">6 Oct 2017</div>
            <div className="tags">
              <div className="tag">{produit.price}$</div>
            </div>
          </div>
        </a>
      </div>
        
       )}

      </section>
    )
}
export default ProductList


 export function Footr() {
  return( <div>
    CopyRigth F2
  from public:  <img src="logo192.png" alt="" />
  from scr : <img src={img} alt="" />
  </div> )
}
