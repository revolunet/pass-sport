import { ReactNode } from 'react';
import cn from 'classnames';

interface Props {
  el: ReactNode;
  classes?: string[];
}
const Highlight = ({ el, classes }: Props) => {
  return <div className={cn('fr-highlight', ...(classes || []))}>{el}</div>;
};

export default Highlight;
