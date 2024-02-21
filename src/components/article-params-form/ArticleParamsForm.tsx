import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import {
	ArticleStateType,
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';
import { FormEvent, useState, useRef, useEffect } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { useClose } from 'src/hooks/useClose';

type ArticleParamsFormProps = {
	open: boolean;
	click: OnClick;
	articleState: ArticleStateType;
	setAppState: (a: ArticleStateType) => void;
};
/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { open, click, articleState, setAppState } = props;
	const [newState, setNewState] = useState(articleState);
	const ref = useRef(null);
	useClose({ isOpen: open, onClose: click, rootRef: ref });

	const onReset = (e: FormEvent) => {
		e.preventDefault();
		setNewState(defaultArticleState);
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		setAppState(newState);
	};

	const onChange = (selected: OptionType, option: string) => {
		setNewState({ ...newState, [option]: selected });
	};

	return (
		<>
			<ArrowButton click={click} open={open} />
			<aside
				ref={ref}
				className={`${styles.container} ${open ? styles.container_open : ''}`}>
				<form className={styles.form} onReset={onReset} onSubmit={onSubmit}>
					<p className={styles.header}>Задайте параметры</p>
					<Select
						title='шрифт'
						selected={newState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected: OptionType) => {
							onChange(selected, 'fontFamilyOption');
						}}
					/>
					<RadioGroup
						title='размер шрифта'
						name={fontSizeOptions[0].title}
						options={fontSizeOptions}
						selected={newState.fontSizeOption}
						onChange={(selected: OptionType) => {
							onChange(selected, 'fontSizeOption');
						}}
					/>
					<Select
						title='цвет шрифта'
						selected={newState.fontColor}
						options={fontColors}
						onChange={(selected: OptionType) => {
							onChange(selected, 'fontColor');
						}}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={newState.backgroundColor}
						options={backgroundColors}
						onChange={(selected: OptionType) => {
							onChange(selected, 'backgroundColor');
						}}
					/>
					<Select
						title='ширина контента'
						selected={newState.contentWidth}
						options={contentWidthArr}
						onChange={(selected: OptionType) => {
							onChange(selected, 'contentWidth');
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
