import { motion } from "framer-motion"

function Header({ setTheName }) {

  const main = () => {

    setTheName(null);

  }

  return (
    <motion.header initial={{ height: 0 }} animate={{ height: "auto" }} transition={{ stiffness: 240, damping: 20, type: "spring"}}>

      <motion.h1 initial={{ scale: .25, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ stiffness: 540, damping: 20, type: "spring"}} whileHover={{ rotate: -5, color: "white" }} onClick={main}>Matema<motion.b  whileHover={{ color: "red" }}>Guiz</motion.b></motion.h1>

      <motion.ul initial={{ scale: .95, rotate: -1 }} animate={{ scale: 1, rotate: 0 }} transition={{ stiffness: 540, damping: 20, type: "spring"}}>

        <li>Bilgi</li>

        <li>Yardım</li>

      </motion.ul>

    </motion.header>
  )
}

export default Header