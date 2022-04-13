
import { AuthProvider } from "./auth/authContext"
import AppRouter from "./routers/AppRouter"


const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default HeroesApp