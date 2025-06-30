import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const Navbar = () => {
  const { user } = useContext(AuthContext)

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold text-primary">AK Gaming Hub</h1>

      {user && (
        <div className="flex items-center gap-3">
          <img
            src={user.profilePic || '/default-avatar.png'}
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="text-gray-600">{user.name}</p>
            <p className="text-green-600 font-bold">
              AK Coins: {user.coinBalance}
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
