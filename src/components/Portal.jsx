import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const portalContainerRef = useRef(null);
  const [container] = useState(() => {
    const div = document.createElement('div');
    portalContainerRef.current = div;
    return div;
  });

  useEffect(() => {
    if (!portalContainerRef.current) {
      return;
    }

    document.body.appendChild(portalContainerRef.current);
    return () => {
      document.body.removeChild(portalContainerRef.current);
    };
  }, []);

  return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;
