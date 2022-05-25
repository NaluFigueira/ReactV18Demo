import React from 'react';
import PageContainer from '../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Resumo da nova versão',
	subTitle: 'Adoção gradual das novas funcionalidades concorrentes',
};

function Adoption() {
	return (
		<PageContainer header={header}>
			<ul className="list-disc list-inside leading-loose text-3xl">
				<li>
					O novo comportamento de renderização será habilitado apenas em partes
					da aplicação que utilizam as novas funcionalidades.
				</li>
				<li>
					O uso do <span className="text-yellow-300">StrictMode</span> auxiliará
					na detecção de bugs durante o desenvolvimento, através da emissão de
					logs com avisos de que funções que estão sendo invocadas duplamente,
					deveriam na verdade ser idempotentes.
				</li>
				<li>
					A longo prazo, a concorrência deverá ser aplicada diretamente em
					frameworks de desenvolvimento, eliminando a necessidade de nos
					preocuparmos com esses aspectos.
				</li>
			</ul>
		</PageContainer>
	);
}

export default Adoption;
