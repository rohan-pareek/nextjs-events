import css from './error-alert.module.css';

function ErrorAlert(props) {
  return <div className={css.alert}>{props.children}</div>;
}

export default ErrorAlert;
