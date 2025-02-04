import React from "react"

type Props = {
    setState: (value: number | 0) => void,
    state: number
}

const FirstGuidePart2:React.FC<Props> = ({setState, state}) => {

    return (
        <>
        <div>
            {/* <h2 className="mt-6 text-center text-xl font-extrabold text-white">Petunjuk Sesi</h2> */}
            <p className="mt-2 text-center text-4xl text-gray-400">
                <br/>
                Duduklah senyaman mungkin. <br/>
                Selama tes belangsung, diharapkan tidak ada perubahan posisi <br/>
                atau gerak secara tiba-tiba. <br/>
                Jika sudah merasa nyaman dan siap.<br/><br/>
                SILAHKAN KLIK TOMBOL MULAI DIBAWAH INI.
            </p>
            <br/><br/><br/><br/>
            <button
            onClick={()=>setState(state+1)}
            className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-bold text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
            Mulai 
            </button>
        </div>
        </>
    )
}

export default FirstGuidePart2