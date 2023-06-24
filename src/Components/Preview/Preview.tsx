import React, { useState, useContext, useMemo } from 'react';
import { FaClipboard } from 'react-icons/fa';
import { FaClipboardCheck } from 'react-icons/fa';
import PreviewStyle from './Preview.module.scss';
import { contextFirst } from '../../Context/Context';

interface Props {
  form: any;
  type?: any;
  setForm?: React.Dispatch<React.SetStateAction<string>>;
}
export const Preview = ({ form, type }: Props) => {
  const Contextdata = useContext(contextFirst);
  const {
    color,
    code,
    setCode,
    handleSeleted,
    TransForm,
    Handlecolors,
    Handlecolorstwo,
    Handlecolorsthree,
  } = Contextdata;
  const [copy, setCopy] = useState<boolean>(false);
  useMemo(() => {
    setCode([
      `${handleSeleted === 'Yes' ? `inset` : ' '} ${form.Horizontaloffset}px ${
        form.Verticaloffset
      }px ${form.Spread}px ${form.Blur}px ${color}`,
    ]);
  }, [color, form, handleSeleted]);

  const handlecopy: () => void = (): void => {
    setCopy(true);
    switch (type) {
      case 'box-shadow':
        navigator.clipboard.writeText(
          `box-shadow: ${code[0]} \n -webkit-box-shadow: ${code[0]}}`,
        );
        break;
      case 'background-color':
        navigator.clipboard.writeText(`background-color: ${color}`);
        break;
      case 'Transform':
        navigator.clipboard.writeText(
          `Transform:scale(${TransForm.Scale}) rotate(${TransForm.Rotate}deg) translate(${TransForm.TranslateX}px, ${TransForm.TranslateY}px) skew(${TransForm.SkewY}deg, ${TransForm.SkewX}deg)`,
        );
        break;
      case 'Gradient':
        navigator.clipboard.writeText(
          `background:linear-gradient(${Handlecolorsthree}deg,${Handlecolors.background} 0%, ${Handlecolorstwo.background} 80%)`,
        );
        break;
      default:
        console.log(null);
    }
  };
  const CssType: any = () => {
    let design;
    switch (type) {
      case 'box-shadow':
        design = (
          <div
            className={PreviewStyle.PreviewContent}
            style={{ boxShadow: `${code}` }}
          ></div>
        );
        break;
      case 'background-color':
        design = (
          <div
            className={PreviewStyle.PreviewContent}
            style={{ backgroundColor: `${color}` }}
          ></div>
        );
        break;
      case 'Transform':
        design = (
          <div
            className={PreviewStyle.PreviewContent}
            style={{
              transform: ` scale(${TransForm.Scale}) rotate(${TransForm.Rotate}deg) translate(${TransForm.TranslateX}px, ${TransForm.TranslateY}px) skew(${TransForm.SkewY}deg, ${TransForm.SkewX}deg)`,
            }}
          ></div>
        );
        break;
      case 'Gradient':
        design = (
          <div
            className={PreviewStyle.PreviewContent}
            style={{
              background: `linear-gradient(${Handlecolorsthree}deg,${Handlecolors.background} 0%, ${Handlecolorstwo.background} 80%)`,
            }}
          ></div>
        );
        break;
      default:
        console.log(null);
    }
    return design;
  };
  const Code = () => {
    let codeblock;
    switch (type) {
      case 'box-shadow':
        codeblock = (
          <code>
            {`box-shadow:` + code[0]}
            <br />
            {`-webkit-box-shadow:` + code[0]}
          </code>
        );
        break;
      case 'background-color':
        codeblock = <code>{`background-color: ${color}`}</code>;
        break;
      case 'Transform':
        codeblock = (
          <code>{`transform: scale(${TransForm.Scale}) rotate(${TransForm.Rotate}deg) translate(${TransForm.TranslateX}px, ${TransForm.TranslateY}px) skew(${TransForm.SkewY}deg, ${TransForm.SkewX}deg)`}</code>
        );
        break;
      case 'Gradient':
        codeblock = (
          <code>{`background: linear-gradient(${Handlecolorsthree}deg,${Handlecolors.background} 0%, ${Handlecolorstwo.background} 80%)`}</code>
        );
        break;
      default:
        console.log(null);
    }
    return codeblock;
  };
  return (
    <div className={PreviewStyle.PreviewContainer}>
      <div className={PreviewStyle.MainContainer}>
        <span>
          <h2>Preview</h2>
        </span>
        <div className={PreviewStyle.Content}>{CssType()}</div>
        <span>
          <h2>Code</h2>
        </span>
        <div className={PreviewStyle.Code}>
          {Code()}
          <div className={PreviewStyle.Icon}>
            {copy ? <FaClipboardCheck /> : <FaClipboard onClick={handlecopy} />}
          </div>
        </div>
      </div>
    </div>
  );
};
