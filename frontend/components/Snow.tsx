const Snow = () => {
  const snowFlakes = [...Array.from(Array(50).keys())].fill(1).map((item) => <div className="snow" key={item} />);
  return <div className="snow-container">{snowFlakes}</div>;
};

export default Snow;
