import { useState } from 'react';
import quantumComputingFaq from './data';
import styles from './styles.module.css';

const MultiSelectAccordion = () => {
  const [selected, setSelected] = useState();
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    const copyMultiple = [...multiSelection];
    const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId);

    console.log(findIndexofCurrentId);

    if (findIndexofCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexofCurrentId, 1);
    }

    setMultiSelection(copyMultiple);
  };

  console.log(selected, multiSelection);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={styles.multiselect}
      >
        Enable Multi Selection
      </button>
      <div className={styles.accordion}>
        {quantumComputingFaq && quantumComputingFaq.length > 0 ? (
          quantumComputingFaq.map((dataItem) => (
            <div key={dataItem.id} className={styles.item}>
              <button
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className={styles.title}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </button>

              {enableMultiSelection
                ? multiSelection.indexOf(dataItem.id) !== -1 && (
                    <p className={styles.content}>{dataItem.answer}</p>
                  )
                : selected === dataItem.id && (
                    <p className={styles.content}>{dataItem.answer}</p>
                  )}
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default MultiSelectAccordion;
