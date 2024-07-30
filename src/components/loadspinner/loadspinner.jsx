import styles from "./loadspinner.module.css";

export default function LoadSpinner({diameter=50}) {
  return (
    <div className={styles.spinner} style={{height: diameter + 'px', width: diameter + 'px'}}></div>
  )
}
