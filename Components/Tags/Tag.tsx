type TagProps = {
  tag: string;
  className: string;
};

const Tag = ({ tag, className }: TagProps) => (
  <span className={className}>{tag}</span>
);

export default Tag;
