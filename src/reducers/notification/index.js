import actionType from '../../actions/actionType'

const initState = {
  content: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      hasRead: true
    },
    {
      id: 2,
      title: 'Doloremque impedit nesciunt beatae officia eum veniam aperiam aliquam unde excepturi voluptas vitae.',
      hasRead: false
    },
    {
      id: 3,
      title: 'Ipsum dicta modi error voluptates, aspernatur sapiente rem id.',
      hasRead: false
    }
  ]
}

export default (state = initState, action) => {
  switch(action.type) {
    case actionType.MASK_NOTIFICATION_READ:
      return {
        ...state,
        content: state.content.map( item => {
          if ( item.id === action.payload.id ) {
            item.hasRead = true
          }
          return item;
        })
      }
    case actionType.MASK_ALL_NOTIFICATION_READ:
      return {
        ...state,
        content: state.content.map( item => {
          item.hasRead = true
          return item;
        })
      }
    default:
      return state
  }
}