export default function Cat(props) {
  console.log(props.name);
  return (
    <div>
      Cat: {props.name} {props.age}
    </div>
  );
}
