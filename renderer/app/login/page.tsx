'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Eye, EyeOff, Zap, Shield, Users } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black p-4">
      <div className="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
        {/* Left Side - Branding */}
        <div className="space-y-8 px-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-slate-200 to-blue-400 bg-clip-text text-5xl font-bold text-transparent lg:text-6xl">
              WIREFRAME
            </h1>
            <p className="text-xl font-medium text-slate-300">
              Building the future, one connection at a time
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Join thousands of innovators who trust WireFrame to power their
              digital experiences with cutting-edge technology and seamless
              integration.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-sm text-slate-300">Lightning Fast</p>
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-sm text-slate-300">Secure</p>
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-sm text-slate-300">Collaborative</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md border-slate-700 bg-black/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-white">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-slate-400">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-slate-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-slate-200">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="border-slate-700 bg-slate-900/80 pr-10 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200">
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              <Link href="/chat">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 font-medium text-white hover:from-blue-700 hover:to-blue-800">
                  Sign In
                </Button>
              </Link>
              <div className="text-center text-sm text-slate-400">
                {"Don't have an account? "}
                <Link
                  href="/register"
                  className="font-medium text-blue-400 underline hover:text-blue-300">
                  Create account
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
