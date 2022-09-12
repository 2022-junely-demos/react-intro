import './Cat.css';

export default function Cat(props) {
  console.log(props.name);
  return (
    <div className="cat-card">
      Cat: {props.name} {props.lives}
      <img src={`${process.env.PUBLIC_URL}/${props.name}.webp`} />
    </div>
  );
}
