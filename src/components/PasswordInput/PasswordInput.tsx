import React, {forwardRef, useEffect, useRef, useState} from "react";
import {InputHTMLAttributes} from "react";
import classNames from "classnames/bind";
import 'normalize.css'

import {SizeInputValues} from "../../constants/SizeInputValue";
import HiddenIcon from "../../assets/show_password.svg";

import styles from "./style.module.scss";
import {Dot} from "./components/Dot";

const cx = classNames.bind(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  inputSize: SizeInputValues;
  error: string
}

enum TypeInput {
  PASSWORD = "password",
  TEXT = "text",
}

export const PasswordInput = forwardRef<HTMLInputElement, Props>(({inputSize, error, ...props}, ref) => {
  const [isHidden, setIsHidden] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [inputValueWidth, setInputValueWidth] = useState(0);
  const [dotCount, setDotCount] = useState(0);
  const inputValueRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputValueRef.current) {
      setInputValueWidth(inputValueRef.current.offsetWidth)
    }
  }, [inputValueRef.current, inputValue]);
  
  useEffect(() => {
      setDotCount(inputValueWidth * 10)
  }, [inputValueWidth]);
  
  console.log(dotCount)
  
  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  }
  
  const dots = Array.from({ length: dotCount }, (x, i) => i);

  return (
    <div className={cx("text-field")}>
      <div className={cx("text-field__wrapper")}>
        <input
          ref={ref}
          type={isHidden ? TypeInput.PASSWORD : TypeInput.TEXT}
          className={cx("text-field__input", inputSize, {error})}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          {...props}
        />
        <div onClick={toggleIsHidden} className={cx("show-password")}>
          <img alt="hidden" src={HiddenIcon}/>
        </div>
      </div>
      {error && <div className={cx("text-field__error")}>{error}</div>}
      {isHidden && (
        <div style={{width: inputValueWidth}} className="spoiler">
          <div className={cx("spoiler__container")}>
            {dots.map((dot) => (
              <Dot key={dot} />
            ))}
          </div>
        </div>
      )}
      <span
        ref={inputValueRef}
        className={cx("fantom-text")}
      >
        {inputValue}
      </span>
    </div>
  );
});
