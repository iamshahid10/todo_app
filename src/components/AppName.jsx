import styles from "./AppName.module.css"

function AppName({appName}) {
    return( <h1 className={styles.todoHeading} >{appName}</h1>);
}
export default AppName; 