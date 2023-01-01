interface Props {
  title: string;
  children: React.ReactNode;
  bgColor: string;
}

const TextBox = ({ title, children, bgColor }: Props) => {
  return (
    <div className="max-w-lg mt-6">
      <p className="ml-6">{title}</p>
      <div className={'my-2 rounded-3xl p-6 ' + bgColor}>{children}</div>
    </div>
  );
};

export default TextBox;
