import { UL } from "./styles"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Projects = ({list}) => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return(

        <UL data-aos="zoom-in">
            {list.map((product, index) =>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <li key={index} id={index}>
                        <figure>
                            <img src={product.img} alt={product.name} />
                        </figure>
                        <div>
                            <h4>{product.category}</h4>
                            <p>{product.name}</p>
                            <span>{product.description}</span>
                        </div>
                    </li>
                </a>)
            }
        </UL>
        
    )
}

export default Projects