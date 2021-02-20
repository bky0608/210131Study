import React, { useEffect, useState } from 'react';
import SearchBar from '../components/search/search-bar';
import SearchList from '../components/search/search-list';

// 1. 키워드가 비었어도 추가가되는 것
// 2. 전체삭제가 안되는 것

const Search = () => {
  const [keywords, setKeywords] = useState(JSON.parse(localStorage.getItem('keywords') || '[]'));

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (keyword) => {
    setKeywords([
      ...keywords,
      {
        id: Date.now(),
        text: keyword,
      },
    ]);
  };

  const handleRemoveKeyword = (id) => {
    setKeywords(keywords.filter((keyword) => keyword.id !== id));
  };

  const handelAllremove = () => {
    setKeywords([]);
    localStorage.removeItem('keywords');
  };

  return (
    <div>
      <SearchBar onAddKeyword={handleAddKeyword} />
      <SearchList
        keywords={keywords} //
        onRemoveKeyword={handleRemoveKeyword}
        onAllremove={handelAllremove}
      />
    </div>
  );
};

export default Search;
