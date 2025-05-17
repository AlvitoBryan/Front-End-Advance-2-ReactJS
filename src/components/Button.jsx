import React from 'react'
import { useNavigate } from "react-router-dom";

export const Button = ({
    type,
    text = "Masuk",
    bgClass = "bg-[var(--Primary-100,_rgba(226,252,217,0.8))]",
    textColor = "text-[var(--Primary-Default,#3ECF4C)]",
    widthButton = "w-full",
    textSize = "text-[0.875rem] sm:text-base",
    hoverBtn = "hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]",
    onClick = () => {},
}) => {
  
  return (
    <button type={type} className={`flex ${widthButton} h-[42px] flex-col justify-center items-center rounded-[10px] ${bgClass} border-none outline-none ${textColor} self-stretch font-[DM_Sans] ${textSize} font-bold leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear ${hoverBtn}` } onClick={() => {onClick()}}>
        {text}
    </button>
  )
}

export const GoogleLogin = ({
    text = "Masuk dengan Google",
    img = "/images/logos_google-icon.svg",
    hoverBtn = "hover:border-[1px] hover:border-[var(--Primary-Default,#3ECF4C)] hover:shadow-[0_0_0_4px_rgba(62,207,76,0.3)]"
}) => {
    return (
        <button className={`flex w-full h-[42px] flex-row justify-center items-center rounded-[10px] gap-[8px] border border-[var(--Other-Border,#F1F1F1)] bg-[var(--text-light-primary,#FFF)] Copytransition-[border-color,box-shadow] duration-300 ease-in-out ${hoverBtn} text-[var(--text-dark-secondary,#4A505C)] font-[DM_Sans] text-[0.875rem] sm:text-base font-bold leading-[140%] tracking-[0.0px]`}>
            <img src={img} />
            {text}
        </button>
    )
}

export const ButtonHero = ({
    text = "Temukan Video Course untuk Dipelajari!",
    bgClass = "bg-[var(--Primary-Default,#3ECF4C)]",
    textColor = "text-[#FFF]",
    widthButton = "w-fit",
    textSize = "text-[0.875rem] sm:text-base",
    hoverBtn = "hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]",
    onClick,
}) => {
  return (
    <button className={`flex ${widthButton} flex-col justify-center items-center rounded-[10px] p-[10px_26px] ${bgClass} border-none outline-none ${textColor} font-[DM_Sans] ${textSize} font-medium leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear ${hoverBtn} cursor-pointer`} style={{paddingTop: 'min(10px, 7.78%)', paddingBottom: 'min(10px, 7.78%)', paddingLeft: 'min(26px, 2.68%)', paddingRight: 'min(26px, 2.68%)',}} onClick={onClick}>
        {text}
    </button>
  )
}

export const ButtonTab = ({
  text = "Semua Kelas",
  bgClass = "bg-[#FFFDF3]",
  textColor = "text-[var(--text-dark-secondary,rgba(51,_51,_51,_0.68))]",
  widthButton = "w-fit",
  textSize = "text-[0.875rem] sm:text-base",
  // hoverBtn = "hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]",
  onClick,
}) => {
return (
  <button className={`flex ${widthButton} items-center p-[12px_36px_12px_0px] gap-[6px] ${bgClass} border-none outline-none ${textColor} font-[DM_Sans] ${textSize} font-medium leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear cursor-pointer whitespace-nowrap tabs-btn`} onClick={onClick}>
      {text}
  </button>
)
}

export const ButtonLogin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <button className='flex flex-col justify-center items-center rounded-[10px] bg-[rgba(226,252,217,0.80)] p-[10px_10px] sm:p-[10px_26px] gap-[8px] text-[#3ECF4C] font-[DM_Sans] text-[0.875rem] sm:text-base font-bold leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]' onClick={handleLoginClick}>
      Login
    </button>
  )
}

export const ButtonRegister = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };
  return (
    <button className='flex flex-col justify-center items-center rounded-[10px] bg-[#FFF] border-[2.5px] border-[#3ECF4C] p-[10px_10px] sm:p-[10px_26px] gap-[8px] text-[#3ECF4C] font-[DM_Sans] text-[0.875rem] sm:text-base font-bold leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]' onClick={handleRegisterClick}>
      Register
    </button>
  )
}

export const ButtonSimpanProfile = () => {
  return (
    <button className='flex h-[46px] flex-col justify-center items-center rounded-[10px] bg-[var(--Primary-100,_rgba(226,252,217,0.8))] p-[10px_20px] 365vp:p-[10px_26px] gap-[8px] text-[#3ECF4C] font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)] cursor-pointer'>
      Simpan
    </button>
  )
}

export const ButtonHapusAkun = ({onClick = () => {}}) => {
  return (
    <button type="button" className='flex h-[46px] flex-col justify-center items-center rounded-[10px] bg-[#FCE3D1] p-[10px_20px] 365vp:p-[10px_26px] gap-[8px] text-[#FF5C2B] font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear hover:bg-[#DB3D1F] hover:text-[var(--text-light-primary,#FFF)] cursor-pointer' onClick={() => {onClick()}}>
      Hapus Akun
    </button>
  )
}


export default Button
