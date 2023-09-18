import React, { useState } from "react";
import { CardData } from "../data/PatientData/dummy";
const initialState = {
  selectedProductId: "",
};


const Records = () => {
  const [selectedProductId, setSelectedProductId] = useState(initialState.selectedProductId);
  return (
    <div><ul>
    {CardData.map(product => (
      <li key={product.Id} data-product-id={product.Id} onClick={() => setSelectedProductId(product.Id)}>
        {product.Name}
      </li>
    ))}
  </ul>
  <ProductDetail product={product} />
</div>
  )
}
const CardDatas =({ product})=>{
   return (
    <div className="bg-white p-4">
      <h2>{product.Name}</h2>
      <p>{product.Edu}</p>
      <p>{product.Exp}</p>
      <p>{product.City}</p>
    </div>
  );
}
export default Records