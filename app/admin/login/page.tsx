import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import LoginForm from './LoginForm'

export default async function LoginPage() {
  let session = null
  try {
    session = await auth()
  } catch {
    // auth() failed — show login form regardless
  }
  if (session?.user) {
    redirect('/admin')
  }
  return <LoginForm />
}
