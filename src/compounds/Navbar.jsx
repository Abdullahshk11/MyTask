import React from 'react'

const Navbar = () => {
  return (
    <nav className="mycontainer sticky top-3 z-50 mx-auto mb-4 flex items-center justify-between rounded-full border border-white/20 bg-violet-300 px-4 py-3 text-white backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <div className="logo text-lg font-semibold tracking-wide">My-Taskes</div>
      <a
        href="https://github.com/Abdullahshk11?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 transition-all duration-300 hover:bg-white/20 hover:text-purple-200"
      >
        <img src="/github.svg" alt="github" className="h-6 w-6 invert" />
        <span className="text-sm font-medium">Github</span>
      </a>
    </nav>
  )
}

export default Navbar
