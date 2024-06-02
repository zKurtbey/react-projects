import { motion } from "framer-motion"

export default function StartScreen({ setTheName }){

    const adVer = () => {

        setTheName(document.querySelector(".isim").value);

    }

    const checkFor = (e) => {

        console.log("baaaaaa");

        if(e.key === "Enter"){

            setTheName(document.querySelector(".isim").value);

            console.log("aaaaaa");

        }

    }

    return(

        <>
        
            <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: .3, stiffness: 540, damping: 35, type: "spring"}}>Adınızı girin</motion.h2>

            <div className="ui">

                <motion.input initial={{ width: 0, paddingLeft: "4.5%", paddingRight: "4.5%" }} animate={{ width: "38%", paddingRight: "10%", paddingLeft: "2%" }} transition={{ delay: .5, stiffness: 540, damping: 50, type: "spring"}} type="text" className="isim" placeholder="Adınızı girin." onKeyDown={checkFor} />
            
                <motion.button initial={{ marginRight: 0 }} animate={{ marginRight: "-30.5%" }} transition={{ delay: .5, stiffness: 540, damping: 50, type: "spring"}} className="start" onClick={adVer}>Başlat</motion.button>
            
            </div>

        </>

    );

}