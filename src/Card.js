// import React from 'react';
// import { Card, Button } from 'semantic-ui-react';

// class Flashcard extends React.Component {
//   state = { showBack: false }

//   toggleAnswer = () => {
//     this.setState({ showBack: !this.state.showBack })
//   }

// render() {
//   const { flashcard: {id, front, back}, remove, toggle} = this.props
//   return (
//     <div>
//       <Card.Group>
//           <Card key={id}>
//             <Card.Content header={title} />
//             {
//               this.state.showAnswer ? 
//               <Card.Content description={answer} />
//               :
//               null
//             }
//             <Card.Content extra>
//               <Button.Group>
//                 <Button color="red" icon onClick={() => remove(id)}>
//                   <Icon name='trash' />
//                 </Button>
//                 <Button color="green" icon>
//                   <Icon name='edit' />
//                 </Button>
//                 <Button color="blue" icon onClick={() => this.toggleAnswer()}>
//                   Toggle Answer
//               </Button>
//               </Button.Group>
//             </Card.Content>
//           </Card>
//         </Card.Group>
//       </div>
//     )
//   }
// }


// export default Flashcard;