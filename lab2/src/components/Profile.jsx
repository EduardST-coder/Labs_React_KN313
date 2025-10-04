// Компонент картки профілю
const FALLBACK_AVATAR =
  "https://i.pravatar.cc/80?u=fallback" // запасний аватар

export default function Profile({ name, role, avatarUrl }) {
  return (
    <article className="card">
      <img
        className="avatar"
        src={avatarUrl || FALLBACK_AVATAR}
        alt={name}
        width="80"
        height="80"
        onError={(e) => (e.currentTarget.src = FALLBACK_AVATAR)}
      />
      <div className="info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </article>
  )
}
