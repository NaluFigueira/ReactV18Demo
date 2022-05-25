import React from 'react';
import ReactBundleImage from '../../assets/react_bundle_problem.png';
import ReactServerComponentsImage from '../../assets/react_server_components.png';
import PageContainer from '../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Resumo da nova versão',
	subTitle: 'Server Components',
};

function ServerComponents() {
	return (
		<div className="flex">
			<PageContainer header={header}>
				<ul className="list-disc list-inside leading-loose text-3xl">
					<li>
						Server Components é uma funcionalidade que está por vir, na qual é
						possível construir apps que combinem a interatividade de componentes
						gerados no client e a performance aprimorada do server rendering
						tradicional.
					</li>
				</ul>
			</PageContainer>
			<div className="ml-10 flex-col items-center justify-center">
				<img
					className="max-w-lg mb-6"
					src={ReactBundleImage}
					alt="Imagem reforçando que o React tinha um bundle maior, já que baixava tudo no cliente"
				/>
				<img
					className="max-w-lg"
					src={ReactServerComponentsImage}
					alt="Imagem mostrando que com parte dos componentes sendo renderizados no server, o bundle é reduzido"
				/>
			</div>
		</div>
	);
}

export default ServerComponents;
