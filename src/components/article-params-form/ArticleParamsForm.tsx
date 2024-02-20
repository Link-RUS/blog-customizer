import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	open: boolean;
	click: OnClick;
};
/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArticleParamsForm = (props:ArticleParamsFormProps) => {
	return (
		<>
			<ArrowButton click={props.click} open={props.open} />
			<aside
				className={`${styles.container} ${
					props.open ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
