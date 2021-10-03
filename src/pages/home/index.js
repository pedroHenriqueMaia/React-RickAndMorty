
import { useEffect, useState } from "react";
import Cards from "../../compnents/cards";
import Nav from "../../compnents/nav";
import SearchInput from "../../compnents/searchInput";
import './home.css';

function HomePage() {
    const [text, setText] = useState('');
    const [origins, setorigins] = useState('');
    const [info, setInfo] = useState([]);
    const url = "https://rickandmortyapi.com/api/character/?"
    

    useEffect(() => {
        fetch(`${url}name=${text}`)
        .then((res) => res.json())
        .then((res) => {
            setInfo(res)
        })
    }, [text]);

    console.log(origins)
    return (
        <div>
        <Nav />
        <div className="container">
            <div className="row">
                <div className="col-md-7 mb-5 mt-5 container">
                    <h4 className="h4 ml-3" align="center">Pesquise sobre um personagem</h4>
                    <SearchInput 
                    value={text}
                    onChange={(search) => setText(search)}/>
                </div>
            </div>
            {info.results && (
             <div className="row">
                {info.results.map((item) => (
                <div className="col-sm-4" key={item.id}>
                <Cards name={item.name} gender={item.gender} image={item.image} origin={item.origin.name} status={item.status} />
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    );
    }

export default HomePage;
