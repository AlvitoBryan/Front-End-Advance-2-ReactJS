const ProfileNavigation = () => {
    return(
        <div className="flex w-full 880vp:max-w-[292px] flex-col items-start gap-[24px]">
            <div className="flex flex-col items-start justify-center gap-[10px] self-stretch">
                <h2 className="self-stretch text-[#222325] font-[Poppins] text-xl font-semibold leading-[120%]">Ubah Profile</h2>
                <h3 className="self-stretch text-[rgba(51,51,51,0.68)] font-[DM_Sans] text-base font-normal leading-[140%] tracking-[0.02px]">Ubah data diri anda</h3>
            </div>
            <div className="flex w-full p-[24px] flex-col items-start gap-[8px] rounded-[10px] border border-[rgba(58,53,65,0.12)] bg-[#FFF]">
                <div className="flex p-[12px] items-start gap-[12px] self-stretch rounded-[10px] border border-[#FFBD3A] bg-[rgba(255,247,215,0.80)] cursor-pointer">
                    <img className="flex items-start" src="/images/person_profiles.svg" alt="person_profile" />
                    <h2 className="flex text-[#FFBD3A] text-center font-[DM_Sans] text-lg font-bold leading-[140%] tracking-[0.02px]">Profile Saya</h2>
                </div>

                <div className="flex w-full p-[12px] items-start gap-[12px] self-stretch rounded-[10px] cursor-pointer">
                    <img className="flex items-start" src="/images/book_profiles.svg" alt="person_profile" />
                    <h2 className="flex text-[rgba(58,53,65,0.38)] text-center font-[DM_Sans] text-lg font-bold leading-[140%] tracking-[0.02px]">Kelas Saya</h2>
                </div>
                
                <div className="flex w-full p-[12px] items-start gap-[12px] self-stretch rounded-[10px] cursor-pointer">
                    <img className="flex items-start" src="/images/shoppingbasket_profiles.svg" alt="person_profile" />
                    <h2 className="flex text-[rgba(58,53,65,0.38)] text-center font-[DM_Sans] text-lg font-bold leading-[140%] tracking-[0.02px]">Pesanan Saya</h2>
                </div>
            </div>
        </div>
    )
}   

export default ProfileNavigation;
