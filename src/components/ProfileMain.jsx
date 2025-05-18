import { ButtonSimpanProfile, ButtonHapusAkun } from "./Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/redux/actions";
import { updateUser, deleteUser } from "../services/api";

const ProfileMain = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [user, setUser] = useState({
        namalengkap: "",
        email: "",
        noHp: ""
    });
    const [editUser, setEditUser] = useState({
        namalengkap: "",
        email: "",
        noHp: ""
    });
    const [showPopup, setShowPopup] = useState(false);
    const [popupMsg, setPopupMsg] = useState("");
    const [focusField, setFocusField] = useState("");

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        if (currentUser && users.length > 0) {
            const userData = users.find(u => u.id === currentUser.id);
            if (userData) {
                setUser({
                    namalengkap: userData.namalengkap || "",
                    email: userData.email || "",
                    noHp: userData.noHp || ""
                });
                setEditUser({
                    namalengkap: userData.namalengkap || "",
                    email: userData.email || "",
                    noHp: userData.noHp || ""
                });
            }
        }
    }, [users]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSimpan = async (e) => {
        e.preventDefault();
        try {
            const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
            const updated = await updateUser(currentUser.id, editUser);
            sessionStorage.setItem("currentUser", JSON.stringify(updated));
            setUser(updated);
            setEditUser(updated);
            setPopupMsg("Profil berhasil diperbarui!");
            setShowPopup(true);
            
        } catch {
            setPopupMsg("Gagal memperbarui profil!");
            setShowPopup(true);
        }
    };

    const handleHapusAkun = async () => {
        try {
            const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
            await deleteUser(currentUser.id);
            sessionStorage.removeItem("currentUser");
            window.location.href = "/";
        } catch {
            setPopupMsg("Gagal menghapus akun!");
            setShowPopup(true);
        }
    };

    return(
        <div className="flex p-[24px] w-full max-w-[872px] flex-col itmes-end gap-[24px] flex-1 rounded-[10px] border border-[rgba(58,53,65,0.12)] bg-[#FFF]">
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm transition-all duration-300">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-center animate-popup-show">
                        {popupMsg ? (
                            <>
                                <span className="text-green-500 text-2xl mb-2">&#10003;</span>
                                <p className="text-gray-800 text-center mb-4 font-semibold">{popupMsg}</p>
                                <button
                                    className="px-4 py-2 bg-[rgba(226,252,217,0.80)] font-semibold text-[#3ECF4C] rounded hover:bg-[#3ECF4C] hover:text-white transition"
                                    onClick={() => { setShowPopup(false); setPopupMsg(""); }}
                                >
                                    Tutup
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="text-red-500 text-2xl mb-2">&#9888;</span>
                                <p className="text-gray-800 text-center mb-4 font-semibold">Apakah Anda yakin ingin menghapus akun ini? Tindakan ini tidak dapat dibatalkan.</p>
                                <div className="flex gap-4 mt-2">
                                    <button
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                                        onClick={() => setShowPopup(false)}
                                    >
                                        Batalkan
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-[#FF5C2B] text-white rounded hover:bg-[#DB3D1F] transition"
                                        onClick={handleHapusAkun}
                                    >
                                        Hapus Akun
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
            <div className="flex items-center gap-[16px] self-stretch">
                <img className="flex w-[92px] h-[92px] flex-col justify-center items-center rounded-[4px] " src="/images/default_profile_pict.svg" alt="default_profile_pict"/>

                <div className="flex flex-col items-start gap-[8px]">
                    <h2 className="text-[#222325] text-center font-[Poppins] text-base sm:text-xl font-semibold leading-[120%]">{user.namalengkap}</h2>
                    <h3 className="text-[#222325] text-center font-[DM_Sans] text-base sm:text-lg font-normal leading-[140%] tracking-[0.02px]">{user.email}</h3>
                    <h3 className="text-[#F64920] text-center font-[DM_Sans] text-sm sm:text-base font-bold leading-[140%] tracking-[0.02px]">Ganti Foto Profil</h3> 
                </div>
            </div>

            <hr className="h-[1px] w-full self-stretch border border-[rgba(58,53,65,0.12)]" />

            <form className="flex flex-col items-end gap-[16px] self-stretch" onSubmit={handleSimpan}>
                <div className="flex 1424vp:flex-row flex-col items-start gap-[16px] self-stretch">
                    <div className="relative w-full 1424vp:max-w-[264px]">
                        <label className={`absolute -top-3 left-4 bg-white px-2 text-sm font-medium leading-[140%] tracking-[0.02px] transition-colors duration-200 ${focusField === 'namalengkap' ? 'text-[#3ECF4C]' : 'text-[rgba(51,51,51,0.68)]'}`} htmlFor="namalengkap">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="namalengkap"
                            name="namalengkap"
                            value={editUser.namalengkap}
                            onChange={handleChange}
                            onFocus={() => setFocusField('namalengkap')}
                            onBlur={() => setFocusField('')}
                            className={`flex h-[49px] w-full p-[0px_17px] flex-col justify-center items-start self-stretch rounded-[10px] border-[1.5px] bg-[#FFF] text-[#222325] font-[DM_Sans] text-base font-normal leading-[140%] tracking-[0.02px] transition-colors duration-200 ${focusField === 'namalengkap' ? 'border-[#3ECF4C] shadow-[0_0_0_2px_rgba(62,207,76,0.15)]' : 'border-[#E0E0E0]'} focus:border-[#3ECF4C] focus:shadow-[0_0_0_2px_rgba(62,207,76,0.15)] focus:outline-none`}
                        />
                    </div>
                    
                    <div className="relative w-full 1424vp:max-w-[264px]">
                        <label className={`absolute -top-3 left-4 bg-white px-2 text-sm font-medium leading-[140%] tracking-[0.02px] transition-colors duration-200 ${focusField === 'email' ? 'text-[#3ECF4C]' : 'text-[rgba(51,51,51,0.68)]'}`} htmlFor="email">
                            E-Mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={editUser.email}
                            onChange={handleChange}
                            onFocus={() => setFocusField('email')}
                            onBlur={() => setFocusField('')}
                            className={`flex h-[49px] w-full p-[0px_17px] flex-col justify-center items-start self-stretch rounded-[10px] border-[1.5px] bg-[#FFF] text-[#222325] font-[DM_Sans] text-semibold font-normal leading-[140%] tracking-[0.02px] transition-colors duration-200 ${focusField === 'email' ? 'border-[#3ECF4C] shadow-[0_0_0_2px_rgba(62,207,76,0.15)]' : 'border-[rgba(58,53,65,0.12)]'} focus:border-[#3ECF4C] focus:shadow-[0_0_0_2px_rgba(62,207,76,0.15)] focus:outline-none`}
                        />
                    </div>
                    
                    <div className="flex flex-start w-full gap-[16px] flex-1">
                        <div className="w-full max-w-[90px]">
                            <div className="flex h-[48px] p-[0px_12px] flex-col items-start rounded-[6px] border border-[rgba(58,53,65,0.12)] bg-[#FF]">
                                <div className="flex p-[12px_0px_12px_5px] items-center gap-[8px]">
                                    <p className="text-[rgba(51,51,51,0.68)] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.02px]">+62</p>
                                    <img src="/images/ArrowDropDown.svg" alt="arrow-down" />
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full 1424vp:max-w-[158px]">
                            <label className={`absolute -top-3 left-4 bg-white px-2 text-sm font-medium leading-[140%] tracking-[0.02px] transition-colors duration-200 ${focusField === 'noHp' ? 'text-[#3ECF4C]' : 'text-[rgba(51,51,51,0.68)]'}`} htmlFor="noHp">
                                No. Hp
                            </label>
                            <input
                                type="text"
                                id="noHp"
                                name="noHp"
                                value={editUser.noHp}
                                onChange={handleChange}
                                onFocus={() => setFocusField('noHp')}
                                onBlur={() => setFocusField('')}
                                className={`flex h-[49px] w-full p-[0px_17px] flex-col justify-center items-start self-stretch rounded-[10px] border-[1.5px] bg-[#FFF] text-[#222325] font-[DM_Sans] text-semibold font-normal leading-[140%] tracking-[0.02px] transition-colors duration-200 ${focusField === 'noHp' ? 'border-[#3ECF4C] shadow-[0_0_0_2px_rgba(62,207,76,0.15)]' : 'border-[rgba(58,53,65,0.12)]'} focus:border-[#3ECF4C] focus:shadow-[0_0_0_2px_rgba(62,207,76,0.15)] focus:outline-none`}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-[16px]">
                    <ButtonHapusAkun onClick={() => setShowPopup(true)} />
                    <ButtonSimpanProfile/>
                </div>

            </form>

            {/* <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.namalengkap} - {user.email} - {user.noHp} - {user.katasandi} - {user.jeniskelamin} - {user.id}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}   

export default ProfileMain;
