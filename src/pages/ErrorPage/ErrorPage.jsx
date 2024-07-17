import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ErrorPage() {
  const location = useLocation();

  return (
    <div>
      <p style={{textAlign: 'center', fontSize: '30px' }}>
        {location.pathname === "/404" ? '404 Page Not Found' : '404 Страница не найдена'}
      </p>
    </div>
  );
}
