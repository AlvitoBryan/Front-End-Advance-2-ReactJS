import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    window.location.href = "/";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <picture className='cursor-pointer' onClick={() => setOpen((prev) => !prev)}>
        <source media="(max-width: 639.5px)" srcSet="/images/sidebar-btn.svg" />
        <img src="/images/Avatar.png" className="max-w-none rounded-xl w-[56px] h-[56px] object-cover" alt="Profile" />
      </picture>
      {open && (
        <div className="absolute right-0 sm:left-auto sm:right-0 mt-3 w-screen sm:w-64 bg-white rounded-xl shadow-lg border-[2.5px] border-[rgba(58,53,65,0.12)] z-50 flex flex-col overflow-hidden animate-popup-show">
          <button onClick={() => {navigate('/profile'); setOpen(false);}} className="text-[1.3rem] text-left px-6 py-4 hover:bg-gray-100 border-b border-[rgba(58,53,65,0.12)] font-[DM_Sans] text-[#6B6B6B]">Profil Saya</button>
          <button onClick={() => {navigate('/kelas-saya'); setOpen(false);}} className="text-[1.3rem] text-left px-6 py-4 hover:bg-gray-100 border-b border-[rgba(58,53,65,0.12)] font-[DM_Sans] text-[#6B6B6B]">Kelas Saya</button>
          <button onClick={() => {navigate('/pesanan-saya'); setOpen(false);}} className="text-[1.3rem] text-left px-6 py-4 hover:bg-gray-100 border-b border-[rgba(58,53,65,0.12)] font-[DM_Sans] text-[#6B6B6B]">Pesanan Saya</button>
          <button onClick={handleLogout} className="text-[1.3rem] text-left px-6 py-4 text-[#FF5C00] font-semibold flex items-center gap-2 hover:bg-orange-50">
            Keluar <span className="text-xl">&#x21E8;</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Profile
