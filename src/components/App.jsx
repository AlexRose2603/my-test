// import './index.css';

function detectOS() {
  const userAgent = window.navigator.userAgent;

  if (/Android/i.test(userAgent)) {
    return 'Android';
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return 'iOS';
  } else {
    return 'Unknown';
  }
}

function redirectToStore() {
  const userOS = detectOS();

  if (userOS === 'Android') {
    window.location.href = 'https://play.google.com/store/apps';
  } else if (userOS === 'iOS') {
    window.location.href =
      'https://apps.apple.com/ua/app/apple-store/id375380948?l=uk';
  } else if (userOS !== 'Android' || 'iOS') {
    // window.location.href = '/';
    alert('Oops, your OS is not supported');
  }
}

function App() {
  return (
    <div style={{ margin: '50px 50px' }}>
      <button
        style={{
          marginRight: '30px',
          padding: '15px 20px',
          borderRadius: '10px',
          backgroundColor: 'teal',
          color: '#f0f085',
          cursor: 'pointer',
        }}
        onClick={redirectToStore}
      >
        Google Store
      </button>
      <button
        style={{
          marginRight: '30px',
          padding: '15px 20px',
          borderRadius: '10px',
          backgroundColor: '#be7575',
          color: '#0e1d1b',
          cursor: 'pointer',
        }}
        onClick={redirectToStore}
      >
        Apple Store
      </button>
    </div>
  );
}

export default App;
