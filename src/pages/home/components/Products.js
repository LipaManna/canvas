import React from 'react'
import prod from '../../../assets/pet-food.png'
import food1 from '../../../assets/food1.jpg'
import food2 from '../../../assets/food2.jpg'
import food3 from '../../../assets/food3.jpg'
import ProdCard from './ProdCard'
let array = [{img:food1,title:"Lorem Ipsum",price:"$40.00"},{img:food2,title:"Lorem Ipsum",price:"$40.00"},{img:food3,title:"Lorem Ipsum",price:"$40.00"}]

const Products = () => {
  return (
    <div className='common-pad prod-wrapper'>
        <div className='container'>
        <div className='heading text-center'>
              <h2>Our Products</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
          </div>
        <div className='row main-row'>
            <div className='col-lg-4'>
                <div className='product-img'>
                    <img src={prod}/>
                </div>
            </div>
            <div className='col-lg-8'>
                <div className='row'>
                {
              array && array.map(function(d,i){
                return(
                  <div className='col-lg-4'>
                    <ProdCard img={d.img} title={d.title} price={d.price}/>
                  </div>
                )
              })
            }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Products