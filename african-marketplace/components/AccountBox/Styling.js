import styled from 'styled-components'

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    box-shadow: 0px 0px 2.5px rgba(a5, at, at, 0.19);
`;

export const MutedLink = styled.a`
    font-size: 12px;
    color: silver;
    font-weight: 500;
    font-family: Poppins;
    text-decoration: none;
    padding-top: .5em;
`;

export const Label = styled.a`
    font-size: 12px;
    /* color: silver; */
    font-weight: 500;
    font-family: Poppins;
    text-decoration: none;
    padding-top: .5em;
    padding-left: .5em;
    cursor: pointer;
`;

export const BoldLink = styled.a`
    font-size: 10px;
    color: rgb(232, 74, 52);
    font-weight: 500;
    font-family: Poppins;
    text-decoration: none;
    margin: 0 1px;
`;

export const Input = styled.input`
    outline: none;
    width: 100%;
    height: 42px;
    border: 1px solid LightGray;
    padding: 0px 10px;
    transition: all, 200ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: LightGray;
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid LightGray;
    }
    
    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(232, 74, 52);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: white;
    font-size: 15px;
    font-weight: 600;
    font-family: Poppins;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(232,74,52);
    background: linear-gradient(90deg, rgba(232,74,52,1) 20%, rgba(232,74,52,1) 100%);

    &:hover {
        filter: brightness(1.03);
    }
`;

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: white;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    margin-top: 3rem;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 2em;`
;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(232,74,52);
    background: linear-gradient(90deg, rgba(232,74,52,1) 20%, rgba(232,74,52,1) 100%);
`;

const HeaderContainer = styled.h2`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 30px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 1.24;
    color: white;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: white;
    font-weight: 500;
    font-size: 11px;
    font-family: Poppins;
    z-index: 10;
    padding-bottom: 2rem;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    /* z-index: 10; */
    padding: 0 1.6em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    },
}

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
}