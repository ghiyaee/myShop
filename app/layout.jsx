'use client'
import './globals.css'
import Footer from './component/Footer';
import Header from './component/Header';
import StoreProvider from './utils/Store';
import { useState } from 'react';
import { useContext } from 'react';
import { Store } from './utils/Store';
export const metadata = {
  title: 'My Shop',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa:IR">
        <StoreProvider>
      <body >
           <div className="flex flex-col justify-between  min-h-screen">
            <Header />
            {children}
            <Footer />
           </div> 
      </body>
        </StoreProvider>
    </html>
  );
}
