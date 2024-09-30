import styles from "./appdownload.module.css";
import appStore from "/appstore.png";
import googlePlay from "/googleplay.png";

const AppDownload = () => {
  return (
    <div className={styles.appDownload} id="app-download">
      <p>
        For Better Experience Download <br /> JSDKFOOD
      </p>
      {/* Platforms (Google, IOS) */}
      <div className={styles.platformsDownload}>
        {/* Google Play */}
        <img src={googlePlay} alt="Google play download" />
        {/* App Store */}
        <img src={appStore} alt="App store download" />
      </div>
    </div>
  );
};

export default AppDownload;
