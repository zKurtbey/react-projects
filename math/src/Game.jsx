import { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function Game({ sorular, setTheName }){

    const [qs, setQs] = useState(sorular.concat()); 

    const [chosenQ, setChosen] = useState(null);

    const [soru, setSoru] = useState(null);

    const [cevap, setCevap] = useState(null);

    const [yanlisCevap, setYanlisCevap] = useState(null);

    const [hepsi, setHepsi] = useState([]);

    const [start, setStart] = useState(1);

    const [puan, setPuan] = useState(0);

    const [isaretlenen, setIsaretlenen] = useState(null);

    function shuffleArray(array) {
     
        for (let i = array.length - 1; i > 0; i--) {
     
            const j = Math.floor(Math.random() * (i + 1));
     
            [array[i], array[j]] = [array[j], array[i]];
     
        }
     
        return array;
    
    }

    function soruSec(array){

        var chosen = array[Math.floor(Math.random() * array.length)];

        return chosen;

    }

    useEffect(() => {

        if(start >= 1){
                        
            setChosen(soruSec(qs));

        } else {
    
            setQs(sorular.concat());

        }

    }, [start]);

    useEffect(()=>{

        if(chosenQ){

            setSoru(chosenQ.soru);

            setYanlisCevap(shuffleArray(chosenQ.yanlis));

            setCevap(chosenQ.dogru);
            
        }

    }, [chosenQ]);

    useEffect(() => {

        if(yanlisCevap && cevap && soru){

            setHepsi(shuffleArray([yanlisCevap[0], yanlisCevap[1], yanlisCevap[2], yanlisCevap[3], cevap]));
            
        }

    }, [cevap]);

    const checkFor = (e) => {

        var value = e.target.textContent;

        setIsaretlenen(value);

        if(value == cevap){
            
            if(qs.length == 0){

                alert("Bütün soruları bildin! Tebrikler. yksyi fullersin bu gidişle.");

                setStart(0);

            } else{
                
                qs.splice(qs.indexOf(chosenQ), 1);

                setPuan(puan+1);

                setStart(start+1);

            }

        } else {

            setStart(0);

        }

    }

    const again = () => {

        setStart(1);

        setPuan(0);

    }

    const restart = () => {

        setTheName(null);

        setPuan(0);

    }

    return(

        <div className="sorubolgesi">

            <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ stiffness: 540, damping: 30, type: "spring"}} whileHover={{ backgroundColor: "#3d3131", boxShadow: "0 0 5px #3e2424" }}>{soru}</motion.h2>

            <h1 className="puan">{puan}</h1>

            <ul>

                {start >= 1 ? (hepsi.map(hp => (

                    <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ stiffness: 540, damping: 30, type: "spring"}} whileHover={{ backgroundColor: "#393737", boxShadow: "0 0 5px #181717" }} key={hp} onClick={checkFor}>{hp}</motion.li>

                ))) : (

                    <div className="bitti">

                        <div className="dgr">

                            <h1>Doğru cevap:</h1>

                            <li>{cevap}</li>

                        </div>

                        <div className="ynl">

                            <h1>Senin işaretlediğin:</h1>

                            <li>{isaretlenen}</li>

                        </div>

                        <div className="sec">

                            <button className="yndn" onClick={again}>Yeniden başla</button>
                        
                            <button className="baska" onClick={restart}>Başka Yarışmacı</button>

                        </div>

                    </div>

                )}

            </ul>

        </div>

    );

}