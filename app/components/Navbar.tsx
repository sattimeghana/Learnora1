import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4">
      <div className="flex gap-6 font-semibold">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/users">Users</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/challenges">Challenges</Link>
        <Link href="/add-user">Add User</Link>
      </div>
    </nav>
  );
}