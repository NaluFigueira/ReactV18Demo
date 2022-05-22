import React from 'react';
import InputWithDebounce from '../../components/AutocompleteInput/InputWithDebounce';
import PageCode from '../../components/PageCode';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Input com autocomplete',
	subTitle: 'Como faríamos antes do React 18?',
};

const code = `function Search() {
    const [isPending, setIsPending] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [listedItems, setListedItems] = useState([]);

    useEffect(() => {
		setIsPending(true);
        const delayDebounceFn = setTimeout(async () => {
            const foundItems = await getData(searchTerm);
		    setIsPending(false);
		    setListedItems(foundItems);
        }, 3000)

        return () => { 
			clearTimeout(delayDebounceFn); 
			setIsPending(false);
		}
    }, [searchTerm])

    return (
		<>
            <input
                autoFocus
                type='text'
                autoComplete='off'
                className='live-search-field'
                placeholder='Search here...'
                onChange={(e) => setSearchTerm(e.target.value)}
            />
		        {isPending && <LoadingComponent />}
		        {!isPending && <ListComponent data={listedItems} />}
		</>
    );
}
`;

const Debounce: React.FC = () => {
	return (
		<PageContainer header={header}>
			<div className="flex">
				<div className="w-3/6">
					<PageCode code={code} />
				</div>
				<div className="sticky w-3/6 top-0 right-0 h-fit">
					<InputWithDebounce />
				</div>
			</div>
		</PageContainer>
	);
};

export default Debounce;
