const Score = (props) => {
  console.log(props)
  return (
    <>
      <h2>{props.score.score}</h2>
      <h2>{props.score.date}</h2>
    </>
  )
}

export default Score