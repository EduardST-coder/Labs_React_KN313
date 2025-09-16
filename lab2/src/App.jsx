import "./App.css"
import Profile from "./components/Profile"

const users = [
  { id: 1, name: "Leanne Graham",       role: "Team Lead",    avatarUrl: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Ervin Howell",         role: "Frontend Dev", avatarUrl: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Clementine Bauch",     role: "Backend Dev",  avatarUrl: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Patricia Lebsack",     role: "QA Engineer",  avatarUrl: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Chelsey Dietrich",     role: "Designer",     avatarUrl: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Mrs. Dennis Schulist", role: "PM",           avatarUrl: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Kurtis Weissnat",      role: "DevOps",       avatarUrl: "https://i.pravatar.cc/150?img=7" }
]

export default function App() {
  return (
    <main className="grid">
      {users.map((u) => (
        <Profile key={u.id} name={u.name} role={u.role} avatarUrl={u.avatarUrl} />
      ))}
    </main>
  )
}
