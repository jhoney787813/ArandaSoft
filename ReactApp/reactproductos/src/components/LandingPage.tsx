import { useEffect, useState } from "react";
import { LandingPageDTO } from "./cliente.model";
import ListadoClientes from "./ListadoClientes";

export default function LadingPage()
{

    const [clientes,setClientes]=useState<LandingPageDTO>({})

    useEffect (()=>{
      const timerId= setTimeout(()=>{
  
        setClientes({
          sinStock: [
            {  id:1, titulo:'cocacola',poster:'https://cafamfloresta.com.co/wp-content/uploads/2021/01/COCACOLA.jpg'
           
            },
            {
              id:2,titulo:'pepsi',poster:'https://verbenalicores.com/wp-content/uploads/elementor/thumbs/pepsi-2L-oq7lc15tx7kjq9w80r1i5e6r3arpipclobjgodgy28.png'
            },
            {
              id:3,titulo:'Quatro Lata',poster:'https://homeburgers.com/uploads/product/841bdf7f5d9245bf97d1acc136b617bb/quatro-558x558px.jpg'
            }
          ],
          enStock:  [
            {  id:3, titulo:'fanta',poster:'https://amarts.pk/wp-content/uploads/2021/07/Fanta-Orange-Bottle-500-ml-e1625807094535-255x255.png'
           
            },
            {
              id:4,titulo:'red bull',poster:'https://m.media-amazon.com/images/I/7125nL99UKS._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg'
            }
          ]
        })
      },800);
  
      return ()=>clearTimeout(timerId);
    })
  
    return(
            <>
        <h3>En Exibición</h3>
            <ListadoClientes clientes={clientes.enStock}/>


            <h3>Sin Inventario</h3>
            <ListadoClientes clientes={clientes.sinStock}/>
            
            </>

    )
}