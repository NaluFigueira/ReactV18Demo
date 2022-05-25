import React, { useEffect, useState } from 'react';

interface PageListProps {
	pages: Array<JSX.Element>;
	finalPageNumber: number;
}

const PageList: React.FC<PageListProps> = ({ pages, finalPageNumber }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const goToNextPage = () => {
		if (currentPage + 1 <= finalPageNumber) {
			setCurrentPage(currentPage + 1);
		}
	};

	const goToPreviousPage = () => {
		if (currentPage - 1 >= 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const processCurrentPage = (event: KeyboardEvent) => {
		if (event.key === 'ArrowRight') {
			goToNextPage();
		}

		if (event.key === 'ArrowLeft') {
			goToPreviousPage();
		}
	};

	useEffect(() => {
		if (currentPage > 0) {
			document.addEventListener('keydown', processCurrentPage);
		}
		return () => {
			document.removeEventListener('keydown', processCurrentPage);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);

	const getCurrentPageContent = (): JSX.Element => {
		return pages.find((_, index) => index + 1 === currentPage) as JSX.Element;
	};

	return getCurrentPageContent();
};

export default PageList;
