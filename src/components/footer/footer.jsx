import styles from './footer.module.css';
import githublogo from '../../assets/github-mark-white.png';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCont}>
        <div className={"creditCont"}>
          All games data credited to
          <a href="https://rawg.io/apidocs">
            RAWG Video Games Database
          </a>
        </div>
        <div className={styles.linksCont}>
          Charles Villalpando--
          <span> Portfolio</span>
          (Coming soon)--
          <span >
            <a href="https://github.com/charlesvill?tab=repositories">
              <img className={styles.ghLogo} src={githublogo} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
