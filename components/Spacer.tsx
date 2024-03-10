import uniqid from 'uniqid'

const Spacer = ({ height }: { height: number }) => {
  const spacers = []
  for (let i = 0; i < height; i++) {
    spacers.push(<br key={uniqid()} />)
  }
  return spacers
}

export default Spacer
