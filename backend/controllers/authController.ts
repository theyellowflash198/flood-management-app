import jwt from "jsonwebtoken"

// Mock user database (replace with MongoDB in production)
const users: any[] = []

export const register = (req: any, res: any) => {
  const { name, phone, city, address, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  const userExists = users.find((u) => u.email === email)
  if (userExists) {
    return res.status(400).json({ error: "User already exists" })
  }

  const user = { id: Date.now(), name, phone, city, address, email, password }
  users.push(user)

  const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET || "secret", {
    expiresIn: "7d",
  })

  res.json({ message: "User registered", token, user: { id: user.id, name, email, city } })
}

export const login = (req: any, res: any) => {
  const { email, password } = req.body

  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" })
  }

  const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET || "secret", {
    expiresIn: "7d",
  })

  res.json({ message: "Login successful", token, user: { id: user.id, name: user.name, email, city: user.city } })
}
