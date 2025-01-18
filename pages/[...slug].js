import { useEffect } from 'react';

export default function SubDomain() {
  useEffect(() => {
    // 获取当前域名
    const host = window.location.host;
    // 根据子域名跳转到不同系统
    if (host.startsWith('nps.')) {
      window.location.href = 'http://124.220.189.240:8080';
    } else {
      window.location.href = 'http://默认系统地址';
    }
  }, []);

  return <div>Loading...</div>;
}