const Image = function (props) {
  return (
    <>
      <img src={props.imgUrl} width={props.imgWidth} />
    </>
  );
};
export default Image;
