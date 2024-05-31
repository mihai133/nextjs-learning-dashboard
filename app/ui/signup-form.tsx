'use client'
import React from 'react'
import { useFormState } from 'react-dom'

export default function SignupForm() {
  const [errorMessage, dispatch] = useFormState(signup, undefined)
  return (
    <div>
      
    </div>
  )
}
