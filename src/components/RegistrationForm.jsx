import React, { useState } from "react";
import FieldForm from "./FieldForm";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    gender: "",
    subscribe: false,
    terms: false,
    country: "",
    avatar: null,
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
    termsNotAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    setErrors({ passwordMismatch: false, termsNotAccepted: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      passwordMismatch: form.password !== form.confirmPassword,
      termsNotAccepted: !form.terms,
    };

    if (newErrors.passwordMismatch || newErrors.termsNotAccepted) {
      setErrors(newErrors);
      return;
    }

    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация пользователя</h2>
      <FieldForm
        label="Имя"
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        required
      />
      <FieldForm
        label="Фамилия"
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        required
      />
      <FieldForm
        label="Адрес электронной почты"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <FieldForm
        label="Пароль"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <FieldForm
        label="Подтверждение пароля"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />
      {errors.passwordMismatch && (
        <p style={{ color: "red" }}>Пароли не совпадают</p>
      )}
      <FieldForm
        label="Дата рождения"
        type="date"
        name="birthdate"
        value={form.birthdate}
        onChange={handleChange}
        required
      />

      <RadioButton
        label="Пол"
        name="gender"
        options={["Мужской", "Женский", "Другое"]}
        selectedValue={form.gender}
        onChange={handleChange}
        required
      />

      <Checkbox
        label="Подписка на новости"
        name="subscribe"
        checked={form.subscribe}
        onChange={handleChange}
      />
      <Checkbox
        label="Согласие с условиями использования"
        name="terms"
        checked={form.terms}
        onChange={handleChange}
        required
      />
      {errors.termsNotAccepted && (
        <p style={{ color: "red" }}>
          Вы должны согласиться с условиями использования
        </p>
      )}

      <label>
        Страна:
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          required
        >
          <option value="">Выберите страну</option>
          <option value="Россия">Россия</option>
          <option value="США">США</option>
          <option value="Канада">Канада</option>
        </select>
      </label>

      <FieldForm
        label="Загрузка аватара"
        type="file"
        name="avatar"
        onChange={handleChange}
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
