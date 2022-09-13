import './Cat.css';

export default function Cat(props) {
  console.log(process.env);
  return (
    <div className="cat-card" style={{ color: props.color }}>
      Cat: {props.name} {props.lives}
      <img src={`${process.env.PUBLIC_URL}/${props.name}.webp`} />
    </div>
  );
}
