import Header1 from '../Header/Header1/Header1';
import Header2 from '../Header/Header2/Header2';
import Header3 from '../Header/Header3/Header3';

const ShowLayout = (props) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default ShowLayout;
