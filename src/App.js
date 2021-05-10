import React, {useState} from 'react';

function App() {
  return (<div>
    <Folder name='Desktop'>

      <Folder name='Music'>
        <Files name='impossible.mp4'/>
        <Files name='give_up.mp4'/>
      </Folder>

      <Folder name='Pictures'>
        <Files name='familypic.jpeg'/>
        <Files name='workpic.png'/>
      </Folder> 
    </Folder>

    <Folder name='Applications'/>
    
  </div>)
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {name, children} = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const direction = isOpen ? 'down' : 'right';
  return <div>
    <span onClick={handleClick}>
      <i className='blue folder icon'></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{marginLeft: '17px'}}>
      {isOpen ? children : null}
      </div>
  </div>
};

const Files = (props) => {

  const {name} = props;
  const fileExt = name.split('.')[1];
  const fileIcons = {
    mp4: 'blue headphones',
    jpeg: 'blue file image',
    png: 'blue file image outline'
  };

  return <div>
    <i className={`${fileIcons[fileExt]} icon`}></i>
    {name}
    </div>
}

export default App;
