import React, {useEffect, useState} from "react";
 
function App() {
    const [pic, setPic] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setPic(data.message)
                setIsLoaded(true)
            })
    }, [])

    return isLoaded ? <img src={pic} alt="A Random Dog"></img> : <p>Loading...</p>

}

export default App;

