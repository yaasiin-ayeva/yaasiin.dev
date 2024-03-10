import React, { useEffect } from 'react';

const BrevoChat: React.FC = () => {
  useEffect(() => {
    (function (d, w, c) {
      // @ts-ignore
      w.BrevoConversationsID = '65ec2c90824cec172d38fe7d';
      // @ts-ignore
      w[c] = w[c] || function () {
        // @ts-ignore
        (w[c].q = w[c].q || []).push(arguments);
      };
      var s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'BrevoConversations');
  }, []);

  return null; // This component is not rendered in the browser, it's only used to initialize the Conversations widget
};

export default BrevoChat;
