import styled from 'styled-components';


const CoffeeDisplay = ({ image, coffeeName, coffeeChar}) => {
    return (
        <Wrapper>
            <Image src={image} />
                <CoffeeName>
                    <a href={coffeeName}>{coffeeName}</a>
                </CoffeeName>
                <CoffeeChar>
                    {coffeeChar}
                </CoffeeChar>
        </Wrapper>
    )
}


const Wrapper = styled.li`
    display: flex;
    margin: 10px auto;
    width: 500px;
    background-color: #efebebeb;
    padding: 10px;
    border-radius: 5px;
`

const Image = styled.img.attrs(props => ({ src: props.src }))`
    width: 100px;
    height: 100px;
    opacity: 0.8;
`;

const CoffeeChar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

const CoffeeName = styled.div`
    color: #5252f9; 
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default CoffeeDisplay