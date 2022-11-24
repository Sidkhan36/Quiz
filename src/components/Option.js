import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Option = () => {
    const [qdata, setQdata] = useState([]);

    let multiFetch = () => {
        axios
            .get(
                `https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple`
            )
            .then((data) => {
                const getData = data;
                setQdata(getData);
                console.log(getData);
            });
    };

    //   let x = Math.floor(Math.random() * 10 + 1);

    useEffect(() => {
        multiFetch();
    }, []);


    return (
        <>
            <div>
            {/* {qdata.data  && (
              <> */}
                {qdata && qdata.data.results.map((q) => (
                    <p>{q.incorrect_answers}</p>
                ))}

              {/* </>
            )} */}
            </div>
        </>
    );
};

export default Option;
