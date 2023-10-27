type TitleProps = {
  title: string;
};

function Title({ title } : TitleProps) {
  return (
    <h1>{title}</h1>
  );
}

export default Title;
