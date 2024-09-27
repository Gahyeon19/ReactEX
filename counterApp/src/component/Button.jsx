function Button({text, countUpnDown}) {
  return (
    <button onClick={countUpnDown}>
      {text}
    </button>
  )
}

export default Button;