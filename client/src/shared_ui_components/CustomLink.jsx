import { Link } from 'react-router-dom';

const CustomLink = ({ children, className, onClick, to, onFocus }) => {
  return (
    <Link className={className} to={to} onClick={onClick} onFocus={onFocus} target='_blank' rel='noopener noreferrer'>
      {children}
    </Link>
  );
};

export default CustomLink;
