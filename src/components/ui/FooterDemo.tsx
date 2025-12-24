"use client"
import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'

const FooterDemo = () => {
  return (
    // <div>
      <footer className="px-6 py-10 border-t border-[#171225] relative z-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {/* <!-- About --> */}
            <div className="border-l border-gray-500 p-2 m-6">
                <h2 className="text-xl font-semibold">Tasnim</h2>
                <p className="text-sm text-[#B7B7B7] mt-5">Computer Science & Engineering student, problem solver, and aspiring full-stack developer.</p>
            </div>

            {/* <!-- Navigation Links --> */}
            <div className="border-l border-gray-500 p-2 m-6">
                <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
                <ul className="text-[#B7B7B7] text-sm space-y-1 mt-5">
                    <li><Link href="#about" className="hover:text-blue-500 transition">About</Link></li>
                    <li><Link href="#projects" className="hover:text-blue-500 transition">Projects</Link></li>
                    <li><Link href="#Skills" className="hover:text-blue-500 transition">Skills</Link></li>
                    <li><Link href="#contact" className="hover:text-blue-500 transition">Contact</Link></li>
                </ul>
            </div>

            {/* <!-- Socials --> */}
             {/* Socials */}
        <div className="border-l border-gray-500 p-2 m-6">
          <h2 className="text-xl font-semibold mb-2">Connect</h2>
          <div className="flex space-x-3 mt-5">

            <a 
              href="https://github.com" 
              target="_blank"   
              rel="noopener noreferrer"
            >
              <svg 
                className="w-8 h-8 text-white hover:text-[#181717] transition-colors duration-200"
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.304-.536-1.528.117-3.184 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.656.243 2.88.12 3.184.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg 
                className="w-8 h-8 text-white hover:text-[#0A66C2] transition-colors duration-200"
                viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452H16.89v-5.568c0-1.327-.025-3.037-1.852-3.037-1.854 0-2.138 1.448-2.138 2.944v5.661H9.337V9h3.409v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.27 2.37 4.27 5.455v6.288zM5.337 7.433a1.987 1.987 0 110-3.974 1.987 1.987 0 010 3.974zM7.119 20.452H3.554V9h3.565v11.452z"/>
              </svg>
            </a>

            <a 
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg 
                className="w-8 h-8 text-white hover:text-[#EA4335] transition-colors duration-200 hover:cursor-pointer"
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 13.065L.015 6h23.97L12 13.065zm0 2.28L.015 8.28V18h23.97V8.28L12 15.345z"/>
              </svg>
           </a>

            <a 
              href="https://youtube.com/@tusharbarua5074?si=uiXm05fdlqDVVTfb" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg 
                className="w-8 h-8 text-white hover:text-[#FF0000] transition-colors duration-200"
                viewBox="0 0 576 512" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/elgooG269" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg 
                className="w-8 h-8 text-white hover:text-[#1877F2] transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512" 
                fill="currentColor"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 
                12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 
                269.5 0c-73.1 0-121.1 44.38-121.1 
                124.72v70.62H86.41V288h62v224h92.66V288z"/>
              </svg>
           </a>

          </div>
          <div className="mt-10 text-sm text-[#0073ec] uppercase">
            © 2025 Tasnim. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
    // </div>
  )
}

export default FooterDemo