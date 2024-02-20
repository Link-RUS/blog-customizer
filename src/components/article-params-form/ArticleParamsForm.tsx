import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { ArticleStateType } from 'src/constants/articleProps';
import { defaultArticleState } from 'src/constants/articleProps';
import { fontFamilyOptions } from 'src/constants/articleProps';
import { fontSizeOptions } from 'src/constants/articleProps';
import { fontColors } from 'src/constants/articleProps';
import { backgroundColors } from 'src/constants/articleProps';
import { contentWidthArr } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	open: boolean;
	click: OnClick;
	articleState: ArticleStateType;
	setAppState: (a: ArticleStateType) => void;
};
/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	return (
		<>
			<ArrowButton click={props.click} open={props.open} />
			<aside
				className={`${styles.container} ${
					props.open ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<p className={styles.header}>Задайте параметры</p>
					<Select
						selected={defaultArticleState.fontFamilyOption}
						options={fontFamilyOptions}
					/>
					<RadioGroup
						name={defaultArticleState.fontSizeOption.title}
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
						title={defaultArticleState.fontSizeOption.title}
					/>
					<Select
						selected={defaultArticleState.fontColor}
						options={fontColors}
					/>
					<Separator />
					<Select 
						selected={defaultArticleState.backgroundColor}
						options={backgroundColors}/>
					<Select 
						selected={defaultArticleState.contentWidth}
						options={contentWidthArr}/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
