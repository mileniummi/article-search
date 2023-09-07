import {ArticleSearch, SearchInput} from "../components/article-search/article-search";
import {useMemo, useState} from "react";
import {articles} from "../mock/articles";
import {ArticleCard} from "../components/article-card/article-card";
import {Empty} from "antd";
import EmptyIcon from '../assets/empty.svg';

export const ArticlesPage = () => {
    const [search, setSearch] = useState('');
    const [searched, setIsSearched] = useState(false);

    // when backend will be implemented
    // const {data} = useSearchArticlesQuery({q: search},{skip: !search});
    const articlesToDisplay = useMemo(() => {
        if (!search) return [];
        return articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));
    }, [search])


    const handleSearchChange = (value: SearchInput) => {
        if (value.search) {
            setIsSearched(true);
            setSearch(value.search);
        } else {
            setSearch('')
        }
    }


    return <>
        <ArticleSearch handleSubmit={handleSearchChange}/>
        <div style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        }}>
            {articlesToDisplay.length ? articlesToDisplay.map((
                {_id, title, summary}) => (
                <div key={_id}>
                    <ArticleCard title={title} description={summary}/>
                </div>
            )) : <Empty image={<img src={EmptyIcon} alt=""/>}
                        description={<span
                            style={{color: 'white'}}>{!searched ? 'Введите ключевое слово для поиска' : 'Результаты не найдены'}</span>}/>
            }
        </div>
    </>
};