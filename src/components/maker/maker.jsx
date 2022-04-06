import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      email: 'ellie@gmail.com',
      title: 'Software Engineer',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'light',
      email: 'ellie@gmail.com',
      title: 'Software Engineer',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'colorful',
      email: 'ellie@gmail.com',
      title: 'Software Engineer',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
