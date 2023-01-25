import Score from "./Score";

const Scores = (props) => {
  console.log(props.scores)
  return (  
    <>
      {props.students.map(score => 
        <Score key={score.date} score={score}/>)}
    </>
  );
}
 
export default Scores;