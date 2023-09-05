'use client';
import { CustomButtonProps } from '../types/index';

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>title</span>
    </button>
  );
}
