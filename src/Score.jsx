const Score = (props) => {
  console.log(props)
  return (
    <>
      <h2>Date: {props.score.date}</h2>
      <h2>Score: {props.score.score}</h2>
    </>
  )
}

export default Score