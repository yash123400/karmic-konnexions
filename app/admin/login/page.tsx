import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import LoginForm from './LoginForm'

export default async function LoginPage() {
  const session = await auth()
  if (session) {
    // Already logged in — send to dashboard
    redirect('/admin')
  }
  return <LoginForm />
}
