import styles from './InputText.module.css';
import { PlusCircle } from 'phosphor-react';

export function InputText() {
    return (
        <div className={styles.divInput}>
            <input className={styles.inputText} type="text" name="Adicione uma nova tarefa" id="" placeholder="Adicione uma nova tarefa"/>
            <button className={styles.Button} type="submit">
                Criar
                <PlusCircle size={19} />
            </button>
        </div>
    )
}