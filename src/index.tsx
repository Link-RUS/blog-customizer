import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { useState } from 'react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [openSidebar, setSidebar] = useState(false);
	const toggleSidebar = () => {
		setSidebar(openSidebar === false ? true : false);
	};
	const closeSidebar = () => {
		setSidebar(false);
	};
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm click={toggleSidebar} open={openSidebar}/>
			<Article click={closeSidebar}/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
