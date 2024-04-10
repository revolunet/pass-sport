import styles from './styles.module.scss';

interface Props {
  children: JSX.Element;
}
const Response: React.FC<Props> = ({ children }) => {
  return <div className={styles.answer}>{children}</div>;
};

export default Response;
