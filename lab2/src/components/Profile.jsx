export default function Profile({ name, role, avatarUrl }) {
  return (
    <article className="card">
      <img className="avatar" src={avatarUrl} alt={name} width="80" height="80" />
      <div className="info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </article>
  )
}
