function TabButton(props) {
  function handleClick() {
    console.log('Button Pressed');
  }

  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}

export default TabButton;
