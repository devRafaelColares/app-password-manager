type TitleProps = {
  title: string;
};

function Title({ title } : TitleProps) {
  return (
    <h1 className="title-req-1">{title}</h1>
  );
}

export default Title;
