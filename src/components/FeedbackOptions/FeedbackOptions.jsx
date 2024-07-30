import { BtnWrap, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {options.map(btn => (
        <FeedbackBtn
          type="button"
          name={btn}
          key={btn}
          onClick={onLeaveFeedback}
        >
          {btn}
        </FeedbackBtn>
      ))}
    </BtnWrap>
  );
};

export default FeedbackOptions;
