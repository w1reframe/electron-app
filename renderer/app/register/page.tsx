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
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, Sparkles, Rocket, Globe } from 'lucide-react'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black p-4">
      <div className="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
        {/* Left Side - Branding */}
        <div className="space-y-8 px-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-slate-200 to-blue-400 bg-clip-text text-5xl font-bold text-transparent lg:text-6xl">
              WireFrame
            </h1>
            <p className="text-xl font-medium text-slate-300">
              Start your journey with us today
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Create your account and unlock access to powerful tools, seamless
              workflows, and a community of innovators ready to transform ideas
              into reality.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/50">
                <Sparkles className="h-4 w-4 text-blue-400" />
              </div>
              <p className="text-slate-300">Access to premium features</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/50">
                <Rocket className="h-4 w-4 text-blue-400" />
              </div>
              <p className="text-slate-300">Launch projects faster</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/50">
                <Globe className="h-4 w-4 text-blue-400" />
              </div>
              <p className="text-slate-300">Global community access</p>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md border-slate-700 bg-black/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-white">
                Create Account
              </CardTitle>
              <CardDescription className="text-slate-400">
                Join WireFrame and start building amazing things
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-slate-200">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-slate-200">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-slate-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
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
                    placeholder="Create a strong password"
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
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-slate-200">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    className="border-slate-700 bg-slate-900/80 pr-10 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200">
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="border-slate-700 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-slate-300">
                  I agree to the{' '}
                  <Link
                    href="/terms"
                    className="text-blue-400 underline hover:text-blue-300">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/privacy"
                    className="text-blue-400 underline hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 font-medium text-white hover:from-blue-700 hover:to-blue-800">
                Create Account
              </Button>
              <div className="text-center text-sm text-slate-400">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-blue-400 underline hover:text-blue-300">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
