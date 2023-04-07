import { ChangeEvent, FC } from 'react';
import styles from './EditableText.module.scss';


interface TextAreaProps {
  text: string;
  onChange: (newValue: string) => void;
  editMode: boolean;
  showPlaceholder: boolean;
  placeholder?: string;
  resizeable?: boolean;
  autoExpand?: boolean;
}

const TextArea: FC<TextAreaProps> = ({ text, placeholder, showPlaceholder, onChange, resizeable, autoExpand, editMode }) => {
  // const textareaRef = useRef<HTMLTextAreaElement>(null);

  // const onTextAreaInput = useCallback(() => {
  //   const textareaCurrent = textareaRef.current;
  //   if (textareaCurrent && autoExpand) {
  //     textareaCurrent.style.height = "5px"; /* Reset the height*/
  //     textareaCurrent.style.height = `${textareaCurrent.scrollHeight}px`;
  //   }
  // }, [autoExpand]);

  // useEffect(() => {
  //   onTextAreaInput();
  // }, [editMode, onTextAreaInput]);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  }

  return (
    <div className={`${styles.textareaComponent} ${resizeable ? styles.resizeable : ''}`}>
      {editMode
        ?
        <textarea
          placeholder={placeholder}
          // ref={textareaRef}
          onChange={handleTextareaChange}
          // onInput={onTextAreaInput}
          value={text}
        />
        : <span
          className={`${styles.textareaValue} ${!text?.length ? styles.placeholder : ''}`}>
            {text || (showPlaceholder && `${placeholder}`)}
          </span>
      }
    </div>
  );
}

export default TextArea;
