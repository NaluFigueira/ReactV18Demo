import React from 'react';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Strict Mode',
	subTitle: 'O que mudou?',
};
function StrictMode() {
	return (
		<PageContainer header={header}>
			<table className="mt-12 table-fixed text-white border-collapse border border-yellow-200 bg-neutral-800 text-center">
				<thead className="bg-yellow-200 text-neutral-900 text-3xl">
					<tr>
						<th className="w-6/12">Antes</th>
						<th className="w-6/12">Agora</th>
					</tr>
				</thead>
				<tbody className="text-2xl">
					<tr>
						<td className="border border-yellow-200 p-5">
							Efeitos de layout criados
						</td>
						<td className="border border-yellow-200 p-5">
							Efeitos de layout criados
						</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">Efeitos criados</td>
						<td className="border border-yellow-200 p-5">Efeitos criados</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">-</td>
						<td className="border border-yellow-200 p-5">
							React simula o desmonte do componente
						</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">-</td>
						<td className="border border-yellow-200 p-5">
							Efeitos de layout são destruídos
						</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">-</td>
						<td className="border border-yellow-200 p-5">
							Efeitos são destruídos
						</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">-</td>
						<td className="border border-yellow-200 p-5">
							React simula a montagem do componente com o estado anterior
						</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">-</td>
						<td className="border border-yellow-200 p-5">
							Efeitos de layout criados
						</td>
					</tr>
					<tr>
						<td className="border border-yellow-200 p-5">-</td>
						<td className="border border-yellow-200 p-5">Efeitos criados</td>
					</tr>
				</tbody>
			</table>
		</PageContainer>
	);
}

export default StrictMode;
