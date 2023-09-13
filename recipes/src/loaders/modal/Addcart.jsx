import React,{useState} from 'react'
import Modal from 'react-modal';
import '../../css/addcart.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Addcart({addcarting}) {
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='addcart' onClick={openModal}>Cart</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <h1>FOOD ADD CARTS</h1>  
        {addcarting.map((item) => {
                  return (
                    <>
                    <div key={item.id}>
                      <p>id number is {item.id}</p>
                      <p>order =  {item.title}</p>
                      <img style={{width:"5vh"}} src={item?.image} alt="cart img" />
                      <hr></hr>
                      <hr></hr>
                    </div>
                    </>
                  );
                })
        }
      </Modal>
    </div>
  )
}
