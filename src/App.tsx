import React from 'react';
import styles from './App.module.sass'; // Import 'styles'

function App() {
  return (
    // Thay vì "App", hãy dùng {styles.App}
    <div className={styles.App}> 
      {/* Lưu ý: CSS Modules thường chuyển "App-header" thành "AppHeader".
        Bạn hãy kiểm tra file .sass của mình để biết tên class chính xác.
        Tôi sẽ giả sử nó là 'AppHeader' và 'AppLink'.
      */}
      <header className={styles.AppHeader}> 
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink} // Sử dụng {styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
