import { useEffect, useState } from "react";
import styles from "./Weather1.module.css"; 
import useRequestData from "../"


const Weather1 = () => {
    <div className="weather-container"></div>

    const {makeRequest, isLoading, data, error} = useRequestData()
    const [zip, setZip] = useState("8500")

    useEffect( () =>{

        if(zip.length === 4 && !isNaN ( zip ) ) {
            makeRequest ("https://api.openweathermap.org/data/2.5/weather?zip="+ zip + ",dk&lang=da&units=metric&appid=e32322bc5e0bdb0acaa73829eab6ac08")
        }
    }, [ zip ])
    return(
        <div>
            <h1 className="mb-6 text-3xl font-bold">Vejret lige nu</h1>
            <input type="text"
            value={zip}
            onChange={ e => setZip( e.target.value)} 
            placeholder="Indtast et postnummer og få vejret!"
            className="w-full max-w-lg input-bordered input-accent"
            />

            {isLoading && <Loader />}
            {error && <Error/>}

            {
                data &&
                <article>
                    <h2> {data.name} </h2>

                    <ul>
                        <li>Temperatur: {data.main.temp}&deg; C</li>
                        <li>Luftfugtighed: {data.main.humidity} %</li>
                        <li>Vindhastighed {data.wind.speed} m/s</li>
                        <li>Vindretning {data.main.deg}&deg;</li>
                        <li>Sol op: Kl. ...(sunrise)</li>
                        <li>Sol ned: Kl. ...(sunset)</li>
                    </ul>
                </article>
            }
            
        </div>
    )
}

export default Weather1;