import React from 'react'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6'>
      <p>Copyright &copy;{new Date().getFullYear()} Daniel Jude </p>
    </footer>
  )
}
