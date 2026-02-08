'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSInit() {
  useEffect(() => {
  AOS.init({
    duration: 600,
    once: false,
    easing: 'ease-in-out-back',
    offset: 50,
  });
}, []);
  return null;
}