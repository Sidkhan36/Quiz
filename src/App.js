import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import upblobs from "./img/upblobs.png";
import downblobs from "./img/downblobs.png";
import Option from "./components/Option";

function App() {
  const [qdata, setQdata] = useState([]);
  const [startPage, setStartPage] = useState(true);
  const [middlePage, setMiddlePage] = useState(false);
  const [qts, setQts] = useState([])
  const [opt, setOpt] = useState([])

  let multiFetch = () => {
    axios.get(`https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple`).then((data) => {
      const getData = data;
      setQdata(getData);
      console.log(getData);
    });
  };
  const handleClicked = () => {
    setMiddlePage(!middlePage);
    setStartPage(!startPage);
  };
  const checkClicked = () => {
    if (true)
      console.log("Answer is correct coloured");
    else
      console.log("Answer is not correct coloured");
  }


  let x = Math.floor((Math.random() * 10) + 1);
  let ids = [1,2,3,4,5]
  let questions = qdata.data !== undefined && qdata.data.results.map(q => q.question)
  let incorrectAns = qdata.data !== undefined && qdata.data.results.map(q => q.incorrect_answers + ',' +q.correct_answer)
    // let questionaire =(questions, incorrectAns)=>{
    //   let i,j
    //   for(i =0; i<=questions.length; i++){
    //     for(j =0; j<=incorrectAns.length; j++){
    //       return {question:i, multipleChoice:j}
    //     // return {question:questions(i), multipleChoice:incorrectAns(j)}
    //   }
    // }}
    // console.log(questionaire)
    let questionaire = ids.map((id,index) => {
      let data;
      return  data= {
        id:id,
        question: questions[index],
        MultiChoice: incorrectAns[index]
      }
    });
    console.log(questionaire)
  // const questionaire =[{question:, options:}]
  // let incorrectAnswer = incorrectAns.sort();
  // console.log(questions)
  console.log(incorrectAns )
  let wrongAns;
  // let options = qdata.data.results.map((q)=>{

  //   return  q.correct_answer.concat(" ", q.incorrect_answers.map(ans => ans))
  // })
  // let questions = qdata.data.results.map(q => q.question)

  // console.log(questions)
  // console.log(options.type)
  // console.log(options)

//   function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }
// shuffle(wrongAns)  



  useEffect(() => {
    multiFetch();
    // setQts(questions);
    // setOpt(options)
  }, []);

  return (
    <div className="App">
      {startPage && (
        <section className="start-page">
          <img src={upblobs} alt="upBlobs" className="upBlobs" />
          <h1>Quizzical</h1>
          <p>Some description if needed</p>
          <img src={downblobs} alt="downBlobs" className="downBlobs" />
          <button className="btn" onClick={handleClicked}>
            START QUIZZ
          </button>
        </section>
      )}

      {middlePage && (
        <section className="middle-page">
          {/* {qdata.data.results[0].correct_answer} */}
          <img src={upblobs} alt="upBlobs" className="sec2-upBlobs" />
          {qdata.data !== undefined && (
            <div className="qpaper">
              {" "}
              {qdata.data.results.map((q) => (
                <>
                  <div className="q-and-option">
                    <p className="queston-cls">{q.question}</p>
                    {/* <p className="queston-cls">{questionaire.map(q=> q.question)}</p> */}
                    <div className="div-options">
                    {wrongAns = q.incorrect_answers.map(ans => <p className="options"> {ans}   </p> )}
                    {wrongAns.push(q.correct_answer)}
                    {/* {q.incorrect_answers.map(ans => <p className="options">{ans}</p>)} */}
                    {/* {<p className="options">{q.correct_answer  }</p>} */}

                      {/* {options.map(ans => <p className="options">{ans}</p>)} */}
                      {/* <Option /> */}
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          )}
          <img src={downblobs} alt="downBlobs" className="sec2-downBlobs" />
          <button className="btn" onClick={checkClicked}>
            Check answers
          </button>
        </section>
      )}
    </div>
  );
}
{/* <h3>{qdata.data.results[0].correct_answer}</h3> */ }

export default App;
