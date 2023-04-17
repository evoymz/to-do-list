import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';
import toDoLogo from '../assets/todo.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.rocket} src={rocketLogo} alt="Logotipo Rocket" />
            <img className={styles.toDo} src={toDoLogo} alt="" />
        </header>
        
    )
}