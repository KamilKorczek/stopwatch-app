import styles from './Time.module.scss';

const Time = ({ time }) => {

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  let hours = Math.floor((time / 36000000) % 24);
  let minutes = Math.floor((time / 60000) % 60);
  let seconds = Math.floor((time / 1000) % 60);
  let milliSeconds = Math.floor(time % 1000);
  
  return(
    <div className={styles.time}>
      {padTo2Digits(hours)}:{padTo2Digits(minutes)}:{padTo2Digits(seconds)}.{(milliSeconds)}
    </div>
  )
};

export default Time;

