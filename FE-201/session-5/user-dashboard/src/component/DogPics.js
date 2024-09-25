import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dogPics.css";

const DogList = ["Random", "Beagle", "Boxer", "Dalmatian", "Husky"];
const DogPics = () => {
    const [selectedBreed, setSelectedBreed] = useState('Random');
    const [dogImg, setDogImg] = useState('');

    async function handleBreedSelected() {
        let url = "";
        try {
            if (selectedBreed === "Random") {
                url = "https://dog.ceo/api/breeds/image/random";
            } else {
                url = `https://dog.ceo/api/breed/${selectedBreed.toLowerCase()}/images/random`;
            }
            let resp = await axios.get(url);
            setDogImg(resp.data.message);
        } catch (err) {
            console.log("Error in fetching data.");
        }
    }

    useEffect(() => {
        handleBreedSelected();    
    }, [selectedBreed]);

  async function handleBreedChange(e) {
        setSelectedBreed(e.target.value);
    }
    function handleNextClick(){
        handleBreedSelected();
    }
    return (
        <div>
            <div className="breed-dropdown">
            <label>Select a breed :</label>
            <select value={selectedBreed} onChange={handleBreedChange}>
                {
                    DogList.map((ele, index) => (
                        <option key={index} value={ele}>{ele}</option>
                    ))
                }
            </select>
            </div>
            <div className="dogImg">
                {dogImg ?
            <img src={dogImg} alt="dog"  width="320" height="350" /> : <p>Loading...</p>}
            </div>
            <button className="next-btn"onClick={handleNextClick}>Next</button>
        </div>
    )
}
export default DogPics;