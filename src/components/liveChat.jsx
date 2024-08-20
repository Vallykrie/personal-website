import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/66c4477c0cca4f8a7a77df7e/1i5nbeg04';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const s0 = document.getElementsByTagName('script')[0];
    s0.parentNode.insertBefore(script, s0);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default TawkToChat;
