'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSInit() {
  useEffect(() => {
  AOS.init({
    duration: 600, // Sedikit lebih cepat agar tidak berat
    once: false,   // Ubah jadi false kalau ingin animasi muncul setiap kali scroll naik-turun
    easing: 'ease-in-out-back', // Efek animasi yang ada sedikit pantulan
    offset: 50,    // Jarak scroll agar animasi mulai
  });
}, []);
  return null;
}