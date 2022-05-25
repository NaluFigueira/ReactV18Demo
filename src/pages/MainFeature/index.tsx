import React from 'react';
import PageContainer from '../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Resumo da nova versão',
	subTitle: 'Concorrência',
};

function MainFeature() {
	return (
		<PageContainer header={header}>
			<table className="mt-12 table-fixed text-white border-collapse border border-yellow-200 bg-neutral-800 text-center">
				<thead className="bg-yellow-200 text-neutral-900 text-3xl">
					<tr>
						<th className="w-6/12">Renderização bloqueante</th>
						<th className="w-6/12">Renderização concorrente</th>
					</tr>
				</thead>
				<tbody className="text-2xl">
					<tr>
						<td className="border border-yellow-200 p-5">
							Uma vez iniciada, nada pode interromper a renderização.
						</td>
						<td className="border border-yellow-200 p-5">
							Processa a renderização em paralelo na memória, podendo ser
							interrompida, caso não for mais necessária. Quando a renderização
							é concluída, o React atualiza o DOM e as alterações são refletidas
							na tela.
						</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">
							Experiência do usuário é prejudicada pela espera do desbloqueio da
							interface.
						</td>
						<td className="border border-yellow-200 p-5">
							UI responde imediatamente ao input do usuário mesmo que esteja no
							meio de uma grande renderização.
						</td>
					</tr>
				</tbody>
			</table>
		</PageContainer>
	);
}

export default MainFeature;
