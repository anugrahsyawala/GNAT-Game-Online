import HTMLReactParser from "html-react-parser"
import React from "react"
import { guideWords, mainWords, sessionWords } from "../utils/words-data"

type Props = {
    setState: (value: number | 0) => void,
    state: number,
    gameState: number,
}

const Guide:React.FC<Props> = ({setState, state, gameState}) => {

    return (
        <>
        <div>
            <h2 className="mt-2 text-center text-4xl font-bold text-white">{HTMLReactParser(sessionWords[gameState])}</h2>
            <br/>
            <p className="mt-2 text-center text-4xl text-gray-400">
            <span className="font-bold text-white">Kategori Target =</span>   <span className="text-white">{HTMLReactParser(guideWords[gameState])}</span>. <br/><br/>
                Silahkan menekan tombol <span className="font-bold text-white"><i>space</i></span> untuk kata-kata kategori <br/>
                <span className="font-bold text-white">{HTMLReactParser(mainWords[gameState])}</span> <br/><br/>
                <span className="font-bold text-white">Jangan klik</span> apapun jika muncul bukan kata kategori kerja.<br/><br/>
                Lakukan terus terus seperti itu hingga sesi berakhir. <br/><br/>
                {/* Tidak perlu menekan spasi untuk kata <span className="text-white font-bold">{words[1]}</span>. */}
            </p>
            <button
            onClick={()=>setState(state+1)}
            className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-bold text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
            Lanjutkan 
            </button>
        </div>
        </>
    )
}

export default Guide