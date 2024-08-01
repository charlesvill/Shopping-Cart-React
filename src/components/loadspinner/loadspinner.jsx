import styles from "./loadspinner.module.css";

export default function LoadSpinner({clsName = null, diameter = 50}) {
  return (
    <div className={`${styles.spinner} ${clsName === null ? '' : styles[clsName]}`} style={{height: diameter + 'px', width: diameter + 'px'}}></div>
  )
}
