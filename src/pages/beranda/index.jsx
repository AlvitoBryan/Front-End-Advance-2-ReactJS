import { useEffect } from "react";
import { ButtonTab } from "../../components/Button";
import Footer from "../../components/Footer";
import HomepageMain from "../../components/HomepageMain";
import MainBanner from "../../components/MainBanner";
import { MainCard, MainCardMobile } from "../../components/MainCard";
import { MainCardWrapper, MainCardWrapperMobile } from "../../components/MainCardWrapper";
import MainHeading from "../../components/MainHeading";
import MainSection from "../../components/MainSection";
import MainTab from "../../components/MainTab";
import MainTabs from "../../components/MainTabs";
import Navigation from "../../components/NavigationBar";
import SecondBanner from "../../components/SecondBanner";

const Homepage = () => {
    useEffect(() => {
        document.title = "Homepage | videobelajar"
    })

    return(
        <>
            <Navigation/>
            
            <HomepageMain>
                <MainBanner
                    heroHeading="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
                    heroDesc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
                />

                <MainSection>
                    <MainHeading
                       mainHeadingText="Koleksi Video Pembelajaran Unggulan"
                       mainDescText="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!" 
                    />

                    <MainTabs>

                        <MainTab>
                            <ButtonTab/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Pemasaran"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Desain"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Pengembangan Diri"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Bisnis"/>
                        </MainTab>

                    </MainTabs>

                    <MainCardWrapper>
                        <MainCard poster="/images/poster_1.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_1.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/images/poster_2.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_2.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/images/poster_4.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_3.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                    </MainCardWrapper>

                    <MainCardWrapper>
                        <MainCard poster="/images/poster_4.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_4.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/images/poster_5.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_5.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/images/poster_6.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_6.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                    </MainCardWrapper>

                    <MainCardWrapper>
                        <MainCard poster="/images/poster_7.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_7.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/images/poster_8.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_8.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/images/poster_9.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/images/Avatar_9.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                    </MainCardWrapper>

                    <MainCardWrapperMobile>
                        <MainCardMobile posterMobile="/images/poster_mobile_1.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_3.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_2.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_2.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_3.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_1.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_4.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_1.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_5.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_6.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_6.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_4.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_7.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_9.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_8.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_8.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                        <MainCardMobile posterMobile="/images/poster_mobile_9.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/images/Avatar_7.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                    </MainCardWrapperMobile>

                </MainSection>

                <SecondBanner
                    heroTitle="NEWSLETTER"
                    heroHeading="Mau Belajar Lebih Banyak?"
                    heroDesc="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"
                />

            </HomepageMain>
            
            <Footer/>
        </>
    )
}

export default Homepage;