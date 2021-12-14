import '../App.css'

export default function Gif({ title, url, id }) {
  return <a href={url} className="gif-card">
    <div >
      <h4>{title}</h4>
      <img src={url} alt={id} />
    </div>
  </a>

}