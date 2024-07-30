import styles from "./loadspinner.module.css";

export default function LoadSpinner({diameter = 50}) {
  return (
    <div className={styles.spinner} style={{height: diameter + 'px', width: diameter + 'px'}}></div>
  )
}




//export default function LoadSpinner(props) {
//  return (
//    <div className={styles.spinner} style={{height: props.diameter + 'px', width: props.diameter + 'px'}}></div>
//  )
//}
//
//LoadSpinner.propTypes = {
//  diameter: PropTypes.number,
//}
//
//LoadSpinner.defaultProps = {
//  diameter: 50,
//};
