import react, { createContext, useState } from 'react'
export const Allcontext = createContext()
export const DataProvider = (props) => {
  const [items, setItems] = useState([
    {
      "name": "EUROLINE 810 POP UP 700 W Pop Up Toaster  (White)",
      "productId": "1",
      "brandName": "EUROLINE",
      "category": "Pop Up Toasters",
      "companyAssured": false,
      "rating": "4.2",
      "price": "12232",
      "discount": "50%",
      "imageURL": "https://rukminim1.flixcart.com/image/416/416/k5lcvbk0/pop-up-toaster/2/j/w/euroline-820-pop-up-810-pop-up-original-imafz8h3duveqgh7.jpeg?q=70",
      "sellerName": "telform inc.",
      "isNewProduct": true
    },
    {
      "name": "Morphy Richards 25 L Convection Microwave Oven  (MWO 25CG, Steel)",
      "productId": "2",
      "brandName": "Morphy",
      "category": "Microwave Ovens",
      "companyAssured": true,
      "rating": "3.9",
      "price": "10999",
      "discount": "11%",
      "imageURL": "https://rukminim1.flixcart.com/image/416/416/microwave-new/v/q/y/morphy-richard-25cg-original-imaec2ddymudmze3.jpeg?q=70",
      "sellerName": "Kwitch Retails",
      "isNewProduct": false
    },
    {
      "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
      "productId": "3",
      "brandName": "Fitbit",
      "category": "Smart Bands",
      "companyAssured": true,
      "rating": "3.9",
      "price": "17992",
      "discount": "",
      "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
      "sellerName": "RetailNet",
      "isNewProduct": true
    },
      ]
  )
  return (
    <div>

      <Allcontext.Provider value={[items, setItems]}>
        {props.children}
      </Allcontext.Provider>
    </div>
  )

}
