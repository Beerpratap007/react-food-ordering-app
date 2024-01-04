import React, { useEffect, useState } from 'react'

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener('online', function() {
      setOnlineStatus(true);
    });

    window.addEventListener('offline', function() {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
}

export default useOnlineStatus
