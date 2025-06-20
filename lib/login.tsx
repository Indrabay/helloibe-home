import { useAppSelector } from "@/redux/store"
import { redirect } from "next/navigation"

export async function login(email: string, password: string) {
  const body = {
    username: email,
    password: password
  }

  try {
    const res = await fetch('https://liked-organic-snipe.ngrok-free.app/users/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })

    const json = await res.json()
  } catch (e) {

  }
}