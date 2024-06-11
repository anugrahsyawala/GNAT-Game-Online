import React from "react"

type Props = {
    setState: (value: number | 0) => void,
    state: number
}

const FirstGuide:React.FC<Props> = ({setState, state}) => {

    return (
        <>
        <div>
            {/* <h2 className="mt-6 text-center text-xl font-extrabold text-white">Petunjuk Sesi</h2> */}
            <p className="mt-2 text-center text-4xl text-gray-400">
                <br/>
                Pada tes ini, terdapat 5 sesi tes yang berbeda. <br/>
                Anda akan diminta untuk memilih kategori kata sesuai dengan <br/>
                instruksi yang diberikan. <br/>
                Silahkan menekan tombol <span className="font-bold text-white"><i>space</i></span> apabila kategori kata yang <br/> 
                diminta muncul. Selain kategori kata yang diminta, silahkan<br/>
                <span className="font-bold text-white">abaikan</span> kata yang muncul dengan tidak menekan tombol <br/> 
                apapun. <br/>
                
            </p>
            <br/>
            <br/>
            <button
            onClick={()=>setState(state+1)}
            className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-bold text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            > 
            Lanjut 
            </button>
        </div>
        </>
    )
}

export default FirstGuide