import React from 'react'

export const MainCard = ({
    poster,
    textHeading,
    textDesc,
    tutorAvatar,
    tutorName,
    tutorRole,
    tutorCompany,
    starRatingFull = "/images/Star.svg",
    starRatingHalf = "/images/Star_half.svg",
    starRatingEmpty = "/images/Star_empty.svg",
}) => {
  return (
    <div className='flex h-auto w-full max-w-[384px] p-[20px] flex-col items-start gap-[16px] shrink-0 rounded-[10px] border border-[var(--Other-Border,rgba(58,_53,_65,_0.12))] bg-[var(--Other-Primary-Background,#FFF)]'>
        <img className='w-[344px] h-[193px] rounded-[10px]' src={poster}/>

        <div className='flex flex-col items-start gap-[8px] self-stretch'>
            <h3 className='text-[var(--text-dark-primary,#222325)] font-[Poppins] text-[1.125rem] font-semibold leading-[120%]'>
                {textHeading}
            </h3>
            <p className='h-p[44px] self-stretch overflow-hidden text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] text-ellipsis font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.02px]'>
                {textDesc}
            </p>
        </div>

        <div className='flex items-start h-full gap-[10px] self-stretch'>
            <img className='flex w-[40px] h-[40px] flex-col justify-center items-center rounded-[10px]' src={tutorAvatar}/>

            <div className='flex flex-col h-auto items-start flex-[1,_0,_0]'>

                <h4 className='text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.02px]'>
                    {tutorName}
                </h4>

                <div className='flex items-start gap-[4px]'>

                    <p className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.875rem] font-normal leading-[140%] tracking-[0.02px]'>{tutorRole}</p>
                    <p className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.875rem] font-normal leading-[140%] tracking-[0.02px]'>di</p>
                    <p className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.875rem] font-bold leading-[140%] tracking-[0.02px]'>{tutorCompany}</p>
                    
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center self-stretch'>
            <div className='flex items-center gap-[8px]'>
                <div className='flex items-center'>
                    <img className='w-[18px] h-[18px]' src={starRatingFull}/>
                    <img className='w-[18px] h-[18px]' src={starRatingFull}/>
                    <img className='w-[18px] h-[18px]' src={starRatingHalf}/>
                    <img className='w-[18px] h-[18px]' src={starRatingEmpty}/>
                    <img className='w-[18px] h-[18px]' src={starRatingEmpty}/>
                </div>

                <p className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.875rem] font-medium leading-[140%] tracking-[0.2px] underline decoration-solid underline-offset-auto decoration-[auto] skip-ink '>3.5 (86)</p>
            </div>

            <h3 className='text-[var(--Primary-Default,#3ECF4C)] font-[Poppins] text-2xl font-semibold leading-[120%]'>Rp 300K</h3>
        </div>

    </div>
  )
}

export const MainCardMobile = ({
    posterMobile,
    textHeadingMobile,
    tutorAvatarMobile,
    tutorNameMobile,
    tutorRoleMobile,
    starRatingFull = "/images/Star.svg",
    starRatingHalf = "/images/Star_half.svg",
    starRatingEmpty = "/images/Star_empty.svg",
}) => {
  return (
    <div className='flex w-full p-[16px] flex-col items-start gap-[8px] rounded-[10px] border border-[var(--Other-Border,rgba(58,53,65,0.12))] bg-[var(--Other-Primary-Background,#FFF)]'>
        <div className='flex items-start gap-[12px] self-stretch'>
            <img className='w-[82px] h-[82px] rounded-[10px]' src={posterMobile}/>
             
             <div className='flex flex-col items-start gap-[8px] flex-[1,_0,_0]'>
                <h3 className='text-[var(--text-dark-primary,#222325)] font-[Poppins] text-base font-semibold leading-[120%]'>{textHeadingMobile}</h3>
                
                <div className='flex items-start gap-[8px] self-stretch'>
                    <img className='flex h-[36px] w-[36px] flex-col justify-center items-center' src={tutorAvatarMobile}/>

                    <div className='flex flex-col items-start flex-[1,_0,_0]'>
                        <h4 className='text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-[0.875rem] font-medium leading-[140%] tracking-[0.2px]'>{tutorNameMobile}</h4>
                        <p className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.75rem] leading-[140%] tracking-[0.2px]'>{tutorRoleMobile}</p>
                    </div>
                </div>

             </div>
        </div>

        <div className='flex justify-between w-full items-center '>
            <div className='flex items-center gap-[8px]'>
                <div className='flex items-center'>
                    <img className='w-[18px] h-[18px] flex items-start gap-[10px]' src={starRatingFull}/>
                    <img className='w-[18px] h-[18px] flex items-start gap-[10px]' src={starRatingFull}/>
                    <img className='w-[18px] h-[18px] flex items-start gap-[10px]' src={starRatingHalf}/>
                    <img className='w-[18px] h-[18px] flex items-start gap-[10px]' src={starRatingEmpty}/>
                    <img className='w-[18px] h-[18px] flex items-start gap-[10px]' src={starRatingEmpty}/>
                </div>

                <p className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.75rem] font-medium leading-[140%] tracking-[0.2px] underline decoration-solid underline-offset-auto decoration-[auto] skip-ink '>3.5 (86)</p>
            </div>

            <h3 className='text-[var(--Primary-Default,#3ECF4C)] font-[Poppins] text-[1.25rem] font-semibold leading-[120%]'>Rp 300K</h3>
        </div>
    </div>
  )
}

export default MainCard
