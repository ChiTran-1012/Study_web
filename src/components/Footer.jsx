import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-300 text-gray-800 py-10 border-t border-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <div className="font-extrabold text-2xl mb-2">StudyWeb</div>
          <p className="text-gray-700 mb-4">
            Empowering learners worldwide with high-quality, accessible online courses. Join us and start your journey to success!
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Twitter" className="hover:text-green-700 transition">
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.882a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-green-700 transition">
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.408.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.408 24 22.674V1.326C24 .592 23.403 0 22.675 0"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-700 transition">
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.378c-.98.98-1.247 2.092-1.306 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.326 2.393 1.306 3.373.981.981 2.093 1.247 3.374 1.306C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.326 3.374-1.306.98-.98 1.247-2.092 1.306-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.326-2.393-1.306-3.373-.981-.981-2.093-1.247-3.374-1.306C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-11.162a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-700 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-700 transition">Courses</a></li>
            <li><a href="#" className="hover:text-green-700 transition">About Us</a></li>
            <li><a href="#" className="hover:text-green-700 transition">Contact</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <div className="font-semibold mb-3">Contact Us</div>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@studyweb.com" className="hover:text-green-700 transition">info@studyweb.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-green-700 transition">+1 234 567 890</a></li>
            <li>123 Learning Ave, Knowledge City</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-8">
        © {new Date().getFullYear()} StudyWeb. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer