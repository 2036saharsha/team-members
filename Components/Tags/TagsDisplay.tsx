import type { Tag as TagType } from '@prisma/client';
import Tag from './Tag';
import style from '@/styles/tags.module.css';

type TagsProps = {
  tags: TagType[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className={style.tags}>
      <div className={style.tags_slider}>
        {tags.map((tag) => {
          return (
            <>
              <h1></h1>
              <Tag
                key={tag.id}
                tag={tag.tag}
                className={`${style[tag.tag.toLowerCase()]} ${style.tag}`}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Tags;
