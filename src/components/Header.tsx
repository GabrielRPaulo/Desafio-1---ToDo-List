import styles from './Header.module.css'
import todoLogo from '../assets/todo-logo.svg'


export function Header() {
    return (
        <header className={styles.header}>
        <img src={todoLogo} alt="Logotipo do ToDo " />

        <form className={styles.newTeskForm}>
            <input placeholder="Adicione uma nova tarefa"/>
            <button>Criar</button>
        </form>
        </header>
    );
}