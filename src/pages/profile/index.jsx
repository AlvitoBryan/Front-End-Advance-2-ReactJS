import Navigation from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import ProfileNavigation from "../../components/ProfileNavigation";
import ProfileMain from "../../components/ProfileMain";
import { useEffect } from 'react'
const Profile = () => {
    useEffect(() => {
            document.title = "Profile | videobelajar"
        })
    return(
        <>
            <Navigation/>
            <div className="flex w-full flex-col 880vp:flex-row p-[28px_20px] md:p-[28px_55px] lg:p-[110px_120px] items-start justify-center gap-[36px]">
                <ProfileNavigation/>
                <ProfileMain/>
            </div>
            <Footer/>
        </>
    )
}

export default Profile;
