import React, { useEffect, useState } from "react";
import AuthForm from "../../components/AuthForm";
import AuthFormContentWrapper from "../../components/AuthFormContentWrapper";
import AuthHeader from "../../components/AuthHeader";
import { Button, GoogleLogin } from "../../components/Button";
import {
  FormInput,
  InputPassword,
  InputDropdown,
  InputNoHP,
} from "../../components/FormInput";
import Navigation from "../../components/NavigationBar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namalengkap: "",
    email: "",
    jeniskelamin: "",
    noHp: "",
    katasandi: "",
    konfirmasikatasandi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    document.title = "Register | videobelajar";
  });

  return (
    <>
      <Navigation />
      <AuthForm>
        <AuthHeader
          title="Pendaftaran Akun"
          subtitle="Yuk, daftarkan akunmu sekarang juga!"
        />

        <AuthFormContentWrapper
          inputs={[
            <FormInput
              id="namaLengkap-input"
              label="Nama Lengkap"
              name="namalengkap"
              required
              type="text"
              value={formData.namalengkap}
              onChange={handleChange}
            />,
            <FormInput
              id="register-email-input"
              label="E-Mail"
              name="email"
              required
              type="text"
              value={formData.email}
              onChange={handleChange}
            />,
            <InputDropdown
              id="kelamin-input"
              label="Jenis Kelamin"
              name="jeniskelamin"
              required
              type="text"
              value={formData.jeniskelamin}
              onChange={handleChange}
            />,
            <InputNoHP
            value={formData.noHp}
            onChange={handleChange}
            />,
            <InputPassword
              id="kataSandi-input"
              label="Kata Sandi"
              name="katasandi"
              required
              type="password"
              value={formData.katasandi}
              onChange={handleChange}
            />,
            <InputPassword
              id="konfirmasiKataSandi-input"
              label="Konfirmasi Kata Sandi"
              name="konfirmasikatasandi"
              required
              type="password"
              value={formData.konfirmasikatasandi}
              onChange={handleChange}
            />,
          ]}
          buttons={[
            <Button type="submit" text="Daftar"/>,
            <Button type="button" onClick={() => navigate("/login")}/>,
            <GoogleLogin />,
          ]}
        />
      </AuthForm>
    </>
  );
};

export default Register;
