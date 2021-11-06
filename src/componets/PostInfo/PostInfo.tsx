import { PostFull } from '../../types/typesdef';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: PostFull
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    id,
    title,
    body,
    author,
    comments,
  } = post;

  return (
    <article className="PostInfo">
      <h2 className="PostInfo__title">{`Article #${id}. ${title}`}</h2>

      <p className="PostInfo__text">{body}</p>

      {author && (
        <UserInfo author={author} />
      )}

      <h3>Commets</h3>
      <CommentList comments={comments} />
    </article>
  );
};