import Button from '../ui/Button';
import css from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={css.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button href='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
