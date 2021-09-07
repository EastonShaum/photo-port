import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'


const mockToggleModal = (image, i) => {
  setCurrentPhoto({...image, index: i});
  setIsModalOpen(!isModalOpen);
}

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup)

describe('Modal component renders', () => {
  it('renders', () => {
  render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>);
});

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })    



// it('renders', () => {
//   const { getByTestId } = render(<Modal currentPhoto={currentPhoto} onClose={toggleModal}/>)
//   expect(getByTestId('h1tag')).toHaveTextContent('Modal
//  me')
// })
 
// it('renders', () => {
//   const { getByTestId } = render(<Modal currentPhoto={currentPhoto} onClose={toggleModal}/>)
//   expect(getByTestId('button')).toHaveTextContent('Submit')
// })

})