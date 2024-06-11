import React, { useEffect, useState } from "react";
import xlsx from "json-as-xlsx";
import { targetWords } from "../utils/words-data";
import type { Data } from "./Interface";

enum ActionType {
    SPACE,
    NOSPACE,
}

type UserData = {
    name: String;
    age: String;
    gender: String;
};

type Props = {
    setState: (value: number | 0) => void;
    setGameState: (value: number | 0) => void;
    setData: (value: Data[]) => void;
    data: Data[];
    userData: UserData;
};

const Finish: React.FC<Props> = ({ setState, setGameState, setData, userData, data }) => {
    const [notDownloaded, setNotDownloaded] = useState<boolean>(true);
    const [splittedData, setSplittedData] = useState<Data[][]>([]);

    useEffect(() => {
        const updatedData: Data[][] = [];
        targetWords.forEach((val, i) => {
            const filteredData: Data[] = data.filter((val) => val.number === i);
            updatedData.push(filteredData);
        });
        setSplittedData(updatedData);
    }, []);

    let testResult = [
        {
            sheet: "Data Diri",
            columns: [
                { label: "Nama", value: "name" },
                { label: "Umur", value: "age" },
                { label: "Jenis Kelamin", value: "gender" },
            ],
            content: [{ name: userData.name, age: userData.age, gender: userData.gender }],
        },
        {
            sheet: "Hasil Sesi Latihan",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[0],
        },
        {
            sheet: "Hasil Sesi 1",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[1],
        },
        {
            sheet: "Hasil Sesi 2",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[2],
        },
        {
            sheet: "Hasil Sesi 3",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[3],
        },
        {
            sheet: "Hasil Sesi 4",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[4],
        },
        
    ];

    let settings = {
        fileName: "Result",
        extraLength: 3,
        writeMode: "writeFile",
        writeOptions: {},
    };
    return (
        <div>
            <h2 className="mb-6 text-center text-xl font-extrabold text-white">Finished Test!</h2>
            <div className="grid gap-2 grid-cols-2">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setState(0);
                        setGameState(0);
                        setData([]);
                    }}
                    className="w-full flex justify-center py-2 px-4 border border-white rounded-md shadow-sm shadow-white text-lg font-medium text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                    Get another test
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        // @ts-ignore
                        xlsx(testResult, settings, () => setNotDownloaded(true));
                    }}
                    disabled={!notDownloaded}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-medium text-black bg-white hover:bg-gray-300 disabled:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                    {notDownloaded ? "Download Data" : "Data is Downloaded"}
                </button>
            </div>
            {/* <br></br> */}
            {/* {
                JSON.stringify(data)
            } */}
        </div>
    );
};

export default Finish;
