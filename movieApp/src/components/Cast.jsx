import './Cast.css'

function Cast({coverImage, name, charactername}) {
  return (
    <>  
      <div className="cast">
        <img src={coverImage} alt="cover_iamge" />
        <p>{name}</p>
        <p>{charactername}</p>
      </div>
    </>

  )
}

export default Cast;