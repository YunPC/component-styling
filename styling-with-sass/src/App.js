import Button from './components/Button'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          Button
        </Button>
        <Button color="gray">Button</Button>
        <Button color="gray" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          Button
        </Button>
        <Button color="pink">Button</Button>
        <Button size="small" color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button outline size="large">
          Button
        </Button>
        <Button color="gray" outline>
          Button
        </Button>
        <Button size="small" outline color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth className="customized-button">
          Button
        </Button>
        <Button color="gray" size="large" fullWidth>
          Button
        </Button>
        <Button
          size="large"
          color="pink"
          fullWidth
          onClick={() => {
            console.log('click')
          }}
          onMouseMove={() => {
            console.log('move')
          }}
        >
          Button
        </Button>
      </div>
    </div>
  )
}

export default App
