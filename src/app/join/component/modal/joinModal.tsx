import Button from '@mui/material/Button';
import {useContext, useEffect, useState} from 'react';
import ReactModal from 'react-modal';
import { ModalsStateContext } from './modalContext';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%'
    },
  };



function JoinModal(){

    const {text, isOpen, retry} = useContext(ModalsStateContext);
    console.log(text);
    const handleSuccess = () => {
        retry();
    }

    return(
        <ReactModal isOpen={isOpen} style={customStyles}>
            <div>
                <section className='m-auto'>
                    <div className='text-center f'>
                        <h1>입력에 문제가 있습니다.</h1>
                    </div>
                    <div className='text-center'>
                        {text}
                    </div>
                </section>
                
                <section className='m-auto'>
                    <div className='pt-5 text-center ml-5'>
                        <Button  variant="contained" color="success" onClick={handleSuccess}>
                            다시 시도
                        </Button>
                    </div>
                    
                </section>
                
            </div>  
        </ReactModal>
        
    )

};

export default JoinModal;