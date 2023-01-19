import axios from 'axios';
import { debounce } from 'lodash';

import { useEffect, useMemo, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { SearchBox } from '../SearchBox/SearchBox';
import { CommentItem } from './CommentItem';

export function CommentList() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');

  const [visibleComments, setVisibleComments] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const fetchComments = async (query = search) => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_start=${start}&_end=${end}&q=${query}`,
      );

      const data = response.data.map(({ id, name, email, body }) => {
        return { id, name, email, body };
      });

      setComments(prev => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [start]);

  const handleLoadMore = () => {
    setStart(prev => prev + 10);
    setEnd(prev => prev + 10);
    setVisibleComments(prev => prev + 10);
  };

  const handleSubmit = value => {
    setSearch(value);
    setStart(0);
    setEnd(10);
    setComments([]);
    setVisibleComments(10);
  };

  const handleSearch = value => {
    setSearch(value);
    searchComments(value);
    setStart(0);
    setEnd(10);
    setComments([]);
    setVisibleComments(10);
  };

  const searchComments = useMemo(() => {
    return debounce(value => fetchComments(value), 1000);
  }, []);

  return (
    <>
      <h2 className="mb-3">Comments</h2>
      <SearchBox onSubmit={handleSubmit} onChange={handleSearch} />
      <ul className="list-group w-75 p-3 gap-2">
        {comments.map(comment => {
          return <CommentItem key={comment.id} email={comment.email} theme={comment.name} text={comment.body} />;
        })}
      </ul>
      {isLoading && <Loader />}
      {visibleComments > comments.length ? null : (
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-primary" onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}
