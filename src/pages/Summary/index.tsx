import React from 'react';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Resumo da nova versão',
	subTitle: 'Concorrência',
};

function Summary() {
	return (
		<PageContainer header={header}>
			<p>
				When you first upgrade to React 18, before adding any concurrent
				features, updates are rendered the same as in previous versions of React
				— in a single, uninterrupted, synchronous transaction. With synchronous
				rendering, once an update starts rendering, nothing can interrupt it
				until the user can see the result on screen.
			</p>
			<p>
				In a concurrent render, this is not always the case. React may start
				rendering an update, pause in the middle, then continue later. It may
				even abandon an in-progress render altogether. React guarantees that the
				UI will appear consistent even if a render is interrupted.
			</p>
			<p>
				To do this, it waits to perform DOM mutations until the end, once the
				entire tree has been evaluated. With this capability, React can prepare
				new screens in the background without blocking the main thread. This
				means the UI can respond immediately to user input even if it’s in the
				middle of a large rendering task, creating a fluid user experience.
			</p>
		</PageContainer>
	);
}

export default Summary;
