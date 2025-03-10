import { useState } from 'react';
import quantumComputingFaq from './data';
import styles from './styles.module.css';

const Accordion = () => {
  const [selected, setSelected] = useState();

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  console.log(selected);

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {quantumComputingFaq && quantumComputingFaq.length > 0 ? (
          quantumComputingFaq.map((dataItem) => (
            <div key={dataItem.id} className={styles.item}>
              <button
                onClick={() => handleSingleSelection(dataItem.id)}
                className={styles.title}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </button>

              {selected === dataItem.id ? (
                <p className={styles.content}>{dataItem.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
