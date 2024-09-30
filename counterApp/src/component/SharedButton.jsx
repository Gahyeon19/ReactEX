function SharedButton ({text, color, textcolor, func}) {
  return (
    <>
      <button style={{
        backgroundColor : color,
        color : textcolor,

      }} onClick={func}>
        {text}
      </button>
    </>
  )
}

export default SharedButton