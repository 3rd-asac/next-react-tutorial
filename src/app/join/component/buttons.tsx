import styled from "styled-components";

const StyledButton = styled.button`
        border-radius: 4px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        vertical-align: top;
        background: linear-gradient(to bottom, #ff0055 0%, #e62243 100%);
        width:144px;
        height:48px;
    `;
    
interface JoinProps {
    onJoinClick : () => void;
}

function Buttons(props : JoinProps) {


    return (
        <section className="bg-[#ffffff] ">
            <div className="flex w-1/2 m-auto">
                
                <div className="pt-10 text-center flex-1">
                    <StyledButton type="button" 
                                onClick={() => props.onJoinClick()} >
                        회원가입하기
                    </StyledButton> 
                </div>
            </div>
        </section>
    )

}


export default Buttons;