// pages/index.js
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 这里填写你的实际系统地址
    window.location.href = 'http://124.220.189.240';
  }, []);

  return <div>Loading...</div>;
}