import Header from './Header.jsx'
import StartScreen from './StartScreen.jsx'
import Game from './Game.jsx';
import { useState } from 'react';

export default function App(){

    const [name, setName] = useState(null);

    const setTheName = (n) => {

        setName(n);
            
    }

    var sorular = [{soru: "f(x) = 2x² - 3x + 5 fonksiyonunun f(3) değeri nedir?", yanlis: ["12", "13", "17", "16"], dogru: "14"}, 
    {soru: "P(x) = x³ - 2x² + 4x - 8 polinomunun P(2) değeri nedir?", yanlis: ["1", "2", "-1", "3"], dogru: "0"},
    {soru: "√50 + √18 ifadesini sadeleştirince çıkan sonuç nedir?", yanlis: ["2√3", "2√2", "7√2", "4√5"], dogru: "8√2"},
    {soru: "x² - 5x + 6 ifadesinin çarpanlarına ayrılmış şekli nasıldır?", yanlis: ["(x - 2)(x - 4)", "(x - 2)(x + 3)", "2x + 3", "(x + 4)(x - 2)"], dogru: "(x - 2)(x - 3)"}, 
    {soru: "3² * 3⁴ işleminin sonucu nedir?", yanlis: ["276", "479", "876", "468"], dogru: "729"},
    {soru: "A = {1, 2, 3, 4, 5} ve B = {3, 4, 5, 6, 7} kümelerinin kesişimleri hangisidir?", yanlis: ["{1, 2}", "{3, 4, 6}", "{1, 3, 5}", "{4, 5}"], dogru: "{3, 4, 5}"},
    {soru: "sin30° + cos60° işleminin sonucu nedir?", yanlis: ["3/2", "2", "2/3", "1/2"], dogru: "1"},
    {soru: "2x - 5 > 3 eşitsizliği aşağıdakilerden hangisine eşittir?", yanlis: ["x >= 4", "2x > 4", "x < 4", "x > 5"], dogru: "x > 4"},
    {soru: "Yarıçapı 7cm olan bir dairenin alanını bulun (Pi = 3.14).", yanlis: ["49", "14", "21.98", "35"], dogru: "43.96"},
    {soru: "√75 - √27 ifadesinin en sade hali hangisidir?", yanlis: ["3√3", "2", "2√4", "√5"], dogru: "2√3"},
    {soru: "x² - 4x + 4 = 0 denkleminde x kaçtır?", yanlis: ["3", "4", "0", "-4"], dogru: "2"},
    {soru: "5 nesneyi sıralamanın kaç farklı yolu vardır?", yanlis: ["110", "200", "25", "50"], dogru: "120"},
    {soru: "7'nin 3'lü kombinasyonunun sonucu nedir?", yanlis: ["15", "50", "210", "25"], dogru: "35"},
    {soru: "|x - 3| < 5 eşitsizliğinin çözülmüş hali nedir?", yanlis: ["1 > x > 4", "2 > x > 5", "2 < x < 4", "-2 <= x < 8"], dogru: "-2 < x < 8"},
    {soru: "x³ - 8 ifadesinin çarpanlarına ayrılmış hali hangisidir?", yanlis: ["(x² - 2x + 4)", "(x - 2)(x² - 2x)", "(x - 2)(x² - 2x + 4)", "x(x - 2)"], dogru: "(x - 2)(x² + 2x + 4)"},
    {soru: "3x + 7 <= 2x + 10 eşitsizliğinin çözümü hangisdir?", yanlis: ["x < 3", "x >= 3", "x = 3", "x < 1"], dogru: "x <= 3"},
    {soru: "P(x) = 2x² - 3x² + x - 5 polinomunun P(1) değeri nedir?", yanlis: ["1", "5", "4", "-4"], dogru: "-5"},
    {soru: "2/3 + 4/5 işleminin sonucu nedir?", yanlis: ["1", "10/12", "8/15", "22/5"], dogru: "22/15"}];

    return(

        <>

            <Header setTheName={setTheName} />

            <main>

                {name ? (

                    <Game sorular={sorular} setTheName={setTheName} />

                ) : (

                    <StartScreen setTheName={setTheName} />
            
                )}

            </main>

        </>

    );

}