"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import LoginForm from "@/components/login-form"
import HomePage from "@/components/home-page"
import Footer from "@/components/footer"

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)

  const handleLogin = (userData: any) => {
    setUser(userData)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
      <main className="flex-1">{!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <HomePage user={user} />}</main>
      <Footer />
    </div>
  )
}
