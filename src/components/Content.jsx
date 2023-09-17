function Content () {
    const handleNameChange = () => {
        const name = ["Ron", "Kevin", "jacob"]
        const int = Math.floor(Math.random() * name.length)
        return name[int]
      }
  return (
    <div className="content">
      <p>Hello {handleNameChange()}</p>
    </div>
  )
}

export default Content