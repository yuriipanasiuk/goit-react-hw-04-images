const { StyledError } = require('./NoticeError.styled');

const NoticeError = () => {
  return (
    <StyledError>
      Sorry, nothing was found for your request, please refresh the page or come
      back later !
    </StyledError>
  );
};

export default NoticeError;
